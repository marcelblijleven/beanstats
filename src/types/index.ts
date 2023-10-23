export type Mapping<T> = Record<string, T>

export interface HasConfigUUID {
    config: {uuid: string}
}
