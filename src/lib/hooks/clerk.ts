import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export function useClerkTheme() {
    const { theme } = useTheme();
    return  theme === "dark" ? dark : undefined;
}