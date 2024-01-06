export function getWeightString(value: number, unit: string): string {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  const toLocaleString = (val: number) => val.toLocaleString(undefined, options);

  if (unit === undefined) return toLocaleString(value);

  if (unit.toUpperCase() !== "GR") {
    return `${toLocaleString(value)} ${unit.toLowerCase()}`;
  }

  if (value < 1000) {
    return `${toLocaleString(value)} ${unit.toLowerCase()}`;
  }

  return `${toLocaleString(value / 1000)} kg`;
}