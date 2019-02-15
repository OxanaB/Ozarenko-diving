export function broke(never: never): never {
    return never;
}

export function matchOptions(options: string[], text: string): string[] {
    const filtered = options.filter(option => option.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    return filtered;
}

export function to<T>(value: T): T { return value; }

export function intersect(original: string[], compare: string[]): string[] {
    const matched: string[] = [];
    original.forEach(element => {
        if (compare.includes(element)) {
            matched.push(element);
        }
    });
    return matched;

}

export function minus(left: string[], right: string[]): string[] {
    return left.filter(left => !right.includes(left));
}

export function monthToString(month: string[], index: number): string {
    const choosenMonth = month[index];
    return choosenMonth;
}
export function monthFromStringToNumber (value: string, array: string[]): number {
    const result = array.indexOf(value);
    return result;
}

