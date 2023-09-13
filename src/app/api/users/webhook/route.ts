import {Webhook} from "svix";
import {headers} from "next/headers";
import type {WebhookEvent, UserWebhookEvent} from "@clerk/nextjs/api";
import {db} from "@/db";
import {createUser, deleteUserByClerkId, getUserByClerkId} from "@/db/operations";
import {clerkClient} from "@clerk/nextjs";
import {UserJSON} from "@clerk/types";

//"runtime edge?"

const acceptedWebhookEvents = [
    "user.created", "user.updated", "user.deleted",
]

/**
 * Performs actions based on the type of Webhook event
 *
 * Only user.created, user.updated and user.deleted trigger
 * actions
 *
 * If a user record does not exist in the database, a record will be created
 * and the database id will be linked to the Clerk account using public metadata.
 *
 */
async function handleEvent(event: WebhookEvent) {
    if (!acceptedWebhookEvents.includes(event.type)) {
        throw new Error(`Error occurred, webhook event type not implemented: ${event.type}`)
    }

    const userEvent = event as UserWebhookEvent;
    const {
        id,
        email_addresses,
        primary_email_address_id,
        username,
    } = userEvent.data as unknown as UserJSON

    if (!id) {
        throw new Error("Error occurred, no Clerk id received")
    }

    const emailAddress = email_addresses?.find(email => email.id === primary_email_address_id)?.email_address || null;

    switch (event.type) {
        case "user.created":
        case "user.updated":
            const exists = await getUserByClerkId(id);

            if (!exists) {
                const user = await createUser({clerkId: id, email: emailAddress, username});

                // Link database id to Clerk account in user metadata
                if (user) {
                    await clerkClient.users.updateUserMetadata(id, {
                        publicMetadata: {
                            databaseId: user.id,
                        }
                    })
                }

                // Update not implemented yet, return here
                return
            }
            break;
        case "user.deleted":
            console.log("foo", id)
            await deleteUserByClerkId(id);
    }
}

/**
 * Webhook that is called whenever a user is created, updated or deleted
 * through Clerk.
 *
 * https://clerk.com/docs/integrations/webhooks
 * https://clerk.com/docs/users/sync-data
 *
 * The webhook is verified through the svix package
 *
 * Data from the request body is used to update the custom user table in the
 * Planetscale database.
 */
export async function POST(req: Request) {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

    if (!webhookSecret) {
        throw new Error("Webhook not set up correctly, missing Clerk secret");
    }

    // Get svix headers and return early if not set correctly
    const requestHeaders = headers();
    const svixId = requestHeaders.get("svix-id");
    const svixTimestamp = requestHeaders.get("svix-timestamp");
    const svixSignature = requestHeaders.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
        return new Response("Invalid svix webhook headers", {status: 400});
    }

    // Get the request body and instantiate a new Webhook
    const payload = await req.json();
    const body = JSON.stringify(payload);
    const webhook = new Webhook(webhookSecret);

    // Verify payload
    let event: WebhookEvent;

    try {
        event = webhook.verify(body, {
            "svix-id": svixId,
            "svix-timestamp": svixTimestamp,
            "svix-signature": svixSignature,
        }) as WebhookEvent
    } catch (err) {
        console.error("Error verifying webhook:", err);
        return new Response("Error occurred", {status: 400})
    }

    try {
        await handleEvent(event);
        return new Response(null, {status: 204})
    } catch (err) {
        return new Response(`Error occurred: ${err}`, {status: 400})
    }
}
