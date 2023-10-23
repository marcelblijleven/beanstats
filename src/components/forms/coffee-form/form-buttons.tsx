import {Loader} from "lucide-react";
import {usePathname, useRouter} from "next/navigation";

import {Button} from "@/components/ui/button";

export function SubmitButton({loading, disabled}: {loading: boolean, disabled: boolean}) {
    return (
        <Button type={"submit"} disabled={disabled}>
            Submit
            {loading && <Loader className={"animate-spin h-4 w-4 ml-2"} />}
        </Button>
    )
}

function CancelButton() {
    const pathname = usePathname().replace("/edit", "");
    const router = useRouter();

    return (
        <Button
            type={"button"}
            variant={"outline"}
            onClick={() => router.push(pathname)}
            className={"hover:bg-destructive hover:text-destructive-foreground"}
        >
            Cancel
        </Button>
    )
}

export function ResetButton({onClick}: {onClick: () => void}) {
    const pathname = usePathname();

    if (pathname.includes("edit")) return <CancelButton />;

    return (
        <Button
            type={"button"}
            variant={"outline"}
            onClick={onClick}
            className={"hover:bg-destructive hover:text-destructive-foreground"}
        >
            Reset
        </Button>
    )
}