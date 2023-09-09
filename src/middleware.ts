import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/beanconqueror/create",
        "/beanconqueror/stats",
        "/beanconqueror/shorten",
        "/beanconqueror/view",
    ]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
