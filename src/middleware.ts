import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/api/users/webhook",
        "/beanconqueror",
        "/beanconqueror/create",
        "/beanconqueror/stats",
        "/beanconqueror/shorten",
        "/beanconqueror/view",
        /r^\/coffee\/(.{12})$/,
        /r^\/brews\/cafe\/(.{12})$/,
        /^\/tools\/(.*)$/,
    ]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
