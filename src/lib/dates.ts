interface ParsedMilliseconds {
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
}

function parseMilliseconds(ms: number): ParsedMilliseconds {
    if (ms === 0) {
        return {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0,
        };
    }

    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24)

    return {
        seconds: seconds % 60,
        minutes: minutes % 60,
        hours: hours % 24,
        days: days,
    }
}

export function getNaturalDate(date: Date): string {
    const rtf = new Intl.RelativeTimeFormat("en", {numeric: "auto"});
    const now = Date.now();
    const diff = (now - date.getTime());
    const {days, hours, minutes, seconds} = parseMilliseconds(diff);

    if (days !== 0) {
        return rtf.format(-1 * days, "days");
    }

    if (hours !== 0) {
        return rtf.format(-1 * hours, "hours");
    }

    if (minutes !== 0) {
        return rtf.format(-1 * minutes, "minutes");
    }

    if (seconds !== 0) {
        return rtf.format(-1 * seconds, "seconds");
    }

    return "Just now"
}

export function getDateString(date: Date | null, includeTime: boolean, timeZone?: string) {
    if (!date) {
        return "";
    }

    const options: Intl.DateTimeFormatOptions = {
        timeZone: timeZone ?? "UTC",
        minute: "2-digit",
        hour: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }


    if (!includeTime) {
        delete options.hour
        delete options.minute
    }

    return date.toLocaleDateString("nl-NL", options);
}

export function getAge(dateStr: string | null): string {
    if (!dateStr) {
        return "-";
    }
    const now = Date.now();
    const date = new Date(dateStr);
    const diff = now - date.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return `${days} days`;
}

export function stringToDate(value: string | undefined): Date | null {
    if (value === undefined || value === "") {
        return null;
    }

    return new Date(value);
}