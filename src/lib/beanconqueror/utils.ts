import {HasConfigUUID, Mapping} from "@/types";

// Create a mapping of T from the provided Array, where the key is
// the UUID from the config property.
export function createMappingByUUID<T extends HasConfigUUID>(data: T[]): Mapping<T> {
    const mapping: Mapping<T> = {};

    for (let i = 0, n = data.length; i < n; i++) {
        const item = data[i];
        mapping[item.config.uuid] = item;
    }

    return mapping;
}

// Increase count/value of each key in the provided mapping
export function increaseCountOfKey(mapping: Mapping<number>, key: string, value?: number) {
    // Check if key consists of multiple keys
    if (key.includes(",")) {
        const subKeys = key.split(",");
        for (const subKey of subKeys) increaseCountOfKey(mapping, subKey, value);
        return
    }

    mapping[key.toLowerCase().trim()] = (mapping[key] || 0) + (value || 1);
}

// Sort mapping by descending value
export function sortCountMappingDesc(mapping: Mapping<number>): [string, number][] {
    return Object.entries(mapping).sort(([,a],[,b]) => b-a);
}
