import * as nextHeaders from "next/headers";

const headers = <jest.Mock<typeof nextHeaders.headers>>nextHeaders.headers
import {POST} from "@/app/api/users/webhook/route";

jest.mock("next/headers", () => ({
    headers: jest.fn()
}));

describe("Users Clerk webhook", () => {
    const actualEnv = process.env;
    const req = new Request("http://localhost:3000/api/users/webhook", {
        method: "post",
        body: JSON.stringify({"foo": "bar"})
    })

    beforeEach(() => {
        jest.resetModules();
        process.env = {...actualEnv}
    })

    test("Incorrect webhook secret", async () => {
        await expect(POST(req)).rejects.toThrow("Webhook not set up correctly, missing Clerk secret");
    });

    describe("Svix headers", () => {
        test("Missing svix-id", async () => {
            process.env.CLERK_WEBHOOK_SECRET = "1234567890";
            const requestHeaders = new Headers({
                // "svix-id": "webhookid",
                "svix-timestamp": new Date().getTime().toString(),
                "svix-signature": "foo"
            });
            headers.mockReturnValueOnce(requestHeaders)

            const res = await POST(req);
            expect(res.status).toBe(400)
            expect(res.body?.toString()).toBe("Invalid svix webhook headers")
        });

        test("Missing svix-timestamp", async () => {
            process.env.CLERK_WEBHOOK_SECRET = "1234567890";
            const requestHeaders = new Headers({
                "svix-id": "webhookid",
                // "svix-timestamp": new Date().getTime().toString(),
                "svix-signature": "foo"
            });
            headers.mockReturnValueOnce(requestHeaders)

            const res = await POST(req);
            expect(res.status).toBe(400)
            expect(res.body?.toString()).toBe("Invalid svix webhook headers")
        });

        test("Missing svix-signature", async () => {
            process.env.CLERK_WEBHOOK_SECRET = "1234567890";
            const requestHeaders = new Headers({
                "svix-id": "webhookid",
                "svix-timestamp": new Date().getTime().toString(),
                // "svix-signature": "foo"
            });
            headers.mockReturnValueOnce(requestHeaders)

            const res = await POST(req);
            expect(res.status).toBe(400)
            expect(res.body?.toString()).toBe("Invalid svix webhook headers")
        });
    });
})