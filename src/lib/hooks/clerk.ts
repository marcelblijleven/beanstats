import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export function useClerkTheme() {
    const { theme } = useTheme();
    const clerkTheme = theme === "dark" ? dark : undefined;
}