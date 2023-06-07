export function capitalizeFirstLetter(value: string): string {
    if (value.length === 1)  {
        return value.toUpperCase();
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
}