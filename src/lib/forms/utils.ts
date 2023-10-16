import {format} from "date-fns";

type Values = Record<string, unknown>

function applyKey<T extends Record<string, unknown | undefined>>(dirtyFields: Partial<Record<keyof T, unknown>>, values:T, key: keyof T) {
    if (typeof values[key] === 'undefined') return;

    dirtyFields[key] = values[key];
}

export function getChangedFields<T extends Values>(dirtyFields: Partial<Record<keyof T, unknown>>, values: T): Partial<T> {
    applyKey(dirtyFields, values, "id");
    applyKey(dirtyFields, values, "publicId");

    return Object.keys(dirtyFields).reduce((prev, key) => {
        if (!dirtyFields[key]) return prev;

        return {
            ...prev,
            [key]: typeof dirtyFields[key] === 'object' ?
                // @ts-ignore
                getChangedFields(dirtyFields[key] as unknown, values[key] as Values)
                : values[key]
        }
    }, {});
}

/**
 * Converts a date to string in yyyy-MM-dd format
 */
export function handleDatesToString<T extends Record<string, unknown>>(values: T, key: keyof T) {
    const fmtString = "yyyy-MM-dd";

    if (typeof values[key] === "undefined") return;

    values[key] = format(values[key] as Date, fmtString) as T[keyof T];
}

/**
 * Removes all non-dirty fields from the form data and converts any date field to a date string
 */
export function prepareFormValues<T extends Record<string, unknown>>(
    values: T, dirtyFields: Partial<Record<keyof T, unknown>>, ...dateFields: Array<keyof T>
): Partial<T> {
    const changedFields = getChangedFields(dirtyFields, values);

    for (const field of dateFields) {
        handleDatesToString<Partial<T>>(changedFields, field)
    }

    return changedFields
}