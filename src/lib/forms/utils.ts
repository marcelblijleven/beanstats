import {format} from "date-fns";

type Values = Record<string, unknown>


function applyKey<T extends Record<string, unknown>>(dirtyFields: Partial<Record<keyof T, unknown>>, values:T, key: keyof T) {
    if (typeof values[key] === 'undefined') return;

    dirtyFields[key] = values[key];
}

export function getChangedFields<T extends Values>(dirtyFields: Partial<Record<keyof T, unknown>>, values: T, keepFields: Array<keyof T>): Partial<T> {
    applyKey(dirtyFields, values, "id");
    applyKey(dirtyFields, values, "publicId");

    for (const key of keepFields) applyKey(dirtyFields, values, key)

    return Object.keys(dirtyFields).reduce((prev, key) => {
        if (!dirtyFields[key]) return prev;

        return {
            ...prev,
            [key]: typeof dirtyFields[key] === 'object' ?
                getChangedFields(dirtyFields[key] as Partial<Record<keyof T, unknown>>, values[key] as T, keepFields)
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
    values: T, dirtyFields: Partial<Record<keyof T, unknown>>, keepFields: Array<keyof T> = [], dateFields: Array<keyof T> = []
): Partial<T> {
    const changedFields = getChangedFields(dirtyFields, values, keepFields);

    for (const field of dateFields) {
        handleDatesToString<Partial<T>>(changedFields, field)
    }

    return changedFields
}