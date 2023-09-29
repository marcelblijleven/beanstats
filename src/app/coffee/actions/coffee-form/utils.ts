import {format} from "date-fns";

/**
 * Converts the buy date and roast date to strings with yyyy-MM-dd format
 */
export function handleDatesToString(values: Record<string, unknown>) {
    const fmtString = "yyyy-MM-dd";

    if (typeof values.buyDate !== "undefined") {
        values.buyDate = format(values.buyDate as Date, fmtString);
    }

    if (typeof values.roastDate !== "undefined") {
        values.roastDate = format(values.roastDate as Date, fmtString);
    }
}