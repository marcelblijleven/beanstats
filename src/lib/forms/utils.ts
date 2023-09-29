type Values = Record<string, unknown>
type DirtyFields = Partial<Record<keyof Values, unknown>>

function applyKey(dirtyFields: Record<string, unknown>, values: Record<string, unknown>, key: string) {
    if (typeof values[key] === 'undefined') return;

    dirtyFields[key] = values[key];
}

export function getChangedFields(dirtyFields: DirtyFields, values: Values): Partial<Values> {
    applyKey(dirtyFields, values, "id");
    applyKey(dirtyFields, values, "publicId");

    return Object.keys(dirtyFields).reduce((prev, key) => {
        if (!dirtyFields[key]) return prev;

        return {
            ...prev,
            [key]: typeof dirtyFields[key] === 'object' ?
                getChangedFields(dirtyFields[key] as DirtyFields, values[key] as Values)
                : values[key]
        }
    }, {});
}
