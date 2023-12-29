import {usePathname} from "next/navigation";

export const useEditCheck = () => {
    const pathname = usePathname();
    const isEdit = pathname.includes("edit");

    return {
        isEdit,
        currentPath: pathname,
        detailPage: isEdit ? pathname.replace("/edit", "") : null,
    };
};