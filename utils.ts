export function map<In, Out>(value: In[], instead: (value:In, index: number) => Out) {
    const result:  Out[] = [];
    for (let index = 0; index < value.length; index++) {
        const inValue = value[index];
        const outValue = instead(inValue, index);
        result.push(outValue);
    }
    return result;
}

export function filter<T>(all: T[], shouldKeep: (val:T) => boolean): T[] {
    const result: T[] = [];
    for (let index=0; index < all.length; index++) {
        const val = all[index]
        if (shouldKeep(val) ) {
            result.push(val)
        };         
    } return result;
}

export function fold<T,R>(vals: T[], result:R, take:(result:R, val:T) => R):R {
    for (let index=0; index< vals.length; index++) {
        const val = vals[index];
        result = take(result, val);
    } return result;
}

export function broke(never: never): never {
    return never;
}
