import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/api/users/webhook",
        "/beanconqueror/create",
        "/beanconqueror/stats",
        "/beanconqueror/shorten",
        "/beanconqueror/view",
        /^\/coffee\/(.{12})$/,
    ]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
