import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/beanconqueror/stats",
        "/beanconqueror/create",
        "/beanconqueror/shorten",
        "/beanconqueror/view",
        "/changelog",
    ]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};