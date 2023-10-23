import type {WebhookEvent} from "@clerk/nextjs/api";
import {headers} from "next/headers";
import {Webhook} from "svix";

import {handleEvent} from "@/app/api/users/webhook/utils";

//"runtime edge?"

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
    const payload = await req.json() as unknown;
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
        if (err instanceof Error) {
            return new Response(`Error occurred: ${err.message}`, {status: 400})
        }

        return new Response("Error occurred while handling webhook", {status: 400})
    }
}
