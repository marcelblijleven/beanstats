import {User} from "@clerk/nextjs/api";

interface Target {
    isPublic?: boolean | null;
    userId: number;
}

/**
 * Checks if the user can view the object
 */
export function canView(user: User | null, target: Target | undefined) {
    if (!!target && target.isPublic) return true;
    else return !!target && target.userId === user?.publicMetadata?.databaseId;
}