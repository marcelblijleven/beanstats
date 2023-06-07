export interface Mapping<T> {
    [key: string]: T
}

export interface HasConfigUUID {
    config: {uuid: string}
}
