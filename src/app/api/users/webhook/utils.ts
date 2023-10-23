import {clerkClient} from "@clerk/nextjs";
import {type UserWebhookEvent, type WebhookEvent} from "@clerk/nextjs/api";
import type {UserJSON} from "@clerk/types";

import {createUser, deleteUserByClerkId, getUserByClerkId, updateUser} from "@/db/operations";

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
export async function handleEvent(event: WebhookEvent) {
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

    const emailAddress = email_addresses?.find(email => email.id === primary_email_address_id)?.email_address ?? null;

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

                return
            }

            await updateUser({clerkId: id, email: emailAddress, username: username});

            break;
        case "user.deleted":
            await deleteUserByClerkId(id);
    }
}