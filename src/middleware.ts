import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        "/",
        "/api/beanconqueror/decode",
        "/api/users/webhook",
        "/beanconqueror",
        "/beanconqueror/create",
        "/beanconqueror/stats",
        "/beanconqueror/shorten",
        "/beanconqueror/view",
        /^\/beanconqueror\/wrapped\/(\d{4})$/,
        "/changelog",
        /^\/coffee\/(.{12})$/,
        /^\/coffee\/freeze\/(.{12})$/,
        /^\/brews\/cafe\/(.{12})$/,
        /^\/tools\/(.*)$/,
    ]
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
