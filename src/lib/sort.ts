function _sortFn<T>(a: T, b: T, asc: boolean): number {
    if (a === undefined && b === undefined) {
        return 0;
    }

    if ((a === undefined && b !== undefined) || (a < b)) {
        return asc ? -1 : 1;
    }

    if ((a !== undefined && b === undefined) || (a > b)) {
        return asc ? 1 : -1;
    }

    return 0;
}

export function sortFnAsc<T>(a: T, b: T): number {
    return _sortFn(a, b, true);
}

export function sortFnDesc<T>(a: T, b: T): number {
    return _sortFn(a, b, false);
}

export function sortFnByKeyAsc<T>(key: string): (a: any, b: any) => number {
    return (a, b) => _sortFn(a[key], b[key], false);
}

export function sortFnByKeyDesc<T>(key: string): (a: any, b: any) => number {
    return (a, b) => _sortFn(a[key], b[key], false);
}
