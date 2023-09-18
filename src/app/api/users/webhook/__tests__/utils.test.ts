import * as operations from "@/db/operations";
import {handleEvent} from "@/app/api/users/webhook/utils";

jest.mock("@/db/operations");
jest.mock("@clerk/nextjs");

const sessionCreatedEvent = {
  "data": {
    "abandon_at": 1656606318265,
    "client_id": "client_29wBS3h1zhE1BsEK2dg9oyypfYk",
    "created_at": 1654014318265,
    "expire_at": 1654619118265,
    "id": "sess_29wBYxnMCQU2KIs6V3ZPOJCPUXx",
    "last_active_at": 1654014318265,
    "object": "session",
    "status": "active",
    "updated_at": 1654014318503,
    "user_id": "user_29wBMCtzATuFJut8jO2VNTVekS4"
  },
  "object": "event",
  "type": "session.created"
}

const userDeletedEvent = {
  "data": {
    "deleted": true,
    "id": "user_29wBMCtzATuFJut8jO2VNTVekS4",
    "object": "user"
  },
  "object": "event",
  "type": "user.deleted"
}

const userUpdatedEvent = {
  "data": {
    "birthday": "",
    "created_at": 1654012591514,
    "email_addresses": [
      {
        "email_address": "example@example.org",
        "id": "idn_29w83yL7CwVlJXylYLxcslromF1",
        "linked_to": [],
        "object": "email_address",
        "verification": {
          "status": "verified",
          "strategy": "admin"
        }
      }
    ],
    "external_accounts": [],
    "external_id": null,
    "first_name": "Example",
    "gender": "",
    "id": "user_29w83sxmDNGwOuEthce5gg56FcC",
    "image_url": "https://img.clerk.com/xxxxxx",
    "last_name": null,
    "last_sign_in_at": null,
    "object": "user",
    "password_enabled": true,
    "phone_numbers": [],
    "primary_email_address_id": "idn_29w83yL7CwVlJXylYLxcslromF1",
    "primary_phone_number_id": null,
    "primary_web3_wallet_id": null,
    "private_metadata": {},
    "profile_image_url": "https://www.gravatar.com/avatar?d=mp",
    "public_metadata": {},
    "two_factor_enabled": false,
    "unsafe_metadata": {},
    "updated_at": 1654012824306,
    "username": null,
    "web3_wallets": []
  },
  "object": "event",
  "type": "user.updated"
}

describe("handleEvent", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  })

  test("Throws an error if an invalid event.type is supplied", async () => {
    await expect(handleEvent(sessionCreatedEvent)).rejects.toThrow("Error occurred, webhook event type not implemented: session.created")
  });

  test("Calls deleteUserByClerkId when receiving user.deleted event", async () => {
    await handleEvent(userDeletedEvent);
    expect(operations.deleteUserByClerkId).toHaveBeenCalledWith(userDeletedEvent.data.id)
  });

  test("Throws an error if a Clerk id is missing from event data", async () => {
    const event = {...userDeletedEvent};
    delete event.data.id;
    await expect(handleEvent(event)).rejects.toThrow("Error occurred, no Clerk id received");
  });

  test("Creates a user when Clerk Id doesn't exist yet", async () => {
    operations.getUserByClerkId.mockReturnValueOnce(undefined);

    await handleEvent(userUpdatedEvent);
    expect(operations.getUserByClerkId).toHaveBeenCalled();
    expect(operations.createUser).toHaveBeenCalledWith({
      clerkId: userUpdatedEvent.data.id,
      email: userUpdatedEvent.data.email_addresses[0].email_address,
      username: userUpdatedEvent.data.username
    });

    expect(operations.updateUser).not.toHaveBeenCalled();
  });

  test("Updates a user when Clerk Id already exists", async () => {
    operations.getUserByClerkId.mockReturnValueOnce({id: "foo"});
    await handleEvent(userUpdatedEvent);
    expect(operations.getUserByClerkId).toHaveBeenCalled();
    expect(operations.createUser).not.toHaveBeenCalled();
    expect(operations.updateUser).toHaveBeenCalledWith({
      clerkId: userUpdatedEvent.data.id,
      email: userUpdatedEvent.data.email_addresses[0].email_address,
      username: userUpdatedEvent.data.username
    });
  });
});