import Image from "next/image";
import {type ReactElement} from "react";
const EMOJI_LENGTH = 4;  // Two regional indicators
const REGIONAL_INDICATOR_OFFSET = 127397;  // Position of regional indicator A
const FLAG_RE = /((?:\uD83C\uDDE6)(?:\uD83C[\uDDE9-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|(?:\uD83C\uDDE7)(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|(?:\uD83C\uDDE8)(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF4\uDDF7\uDDFA-\uDDFF])|(?:\uD83C\uDDE9)(?:\uD83C[\uDDEA\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|(?:\uD83C\uDDEA)(?:\uD83C[\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDF9])|(?:\uD83C\uDDEB)(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|(?:\uD83C\uDDEC)(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|(?:\uD83C\uDDED)(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|(?:\uD83C\uDDEE)(?:\uD83C[\uDDE9-\uDDF4\uDDF6-\uDDF9])|(?:\uD83C\uDDEF)(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C\uDDF0)(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|(?:\uD83C\uDDF1)(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF8-\uDDFB\uDDFE])|(?:\uD83C\uDDF2)(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|(?:\uD83C\uDDF3)(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|(?:\uD83C\uDDF4)(?:\uD83C\uDDF2)|(?:\uD83C\uDDF5)(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|(?:\uD83C\uDDF6)(?:\uD83C\uDDE6)|(?:\uD83C\uDDF7)(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|(?:\uD83C\uDDF8)(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|(?:\uD83C\uDDF9)(?:\uD83C[\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|(?:\uD83C\uDDFA)(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF])|(?:\uD83C\uDDFB)(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|(?:\uD83C\uDDFC)(?:\uD83C[\uDDEB\uDDF8])|(?:\uD83C\uDDFE)(?:\uD83C[\uDDEA\uDDF9])|(?:\uD83C\uDDFF)(?:\uD83C[\uDDE6\uDDF2\uDDFC]))/g;

export function countryCodeFromFlag(emoji: string): string {
    if (emoji.length !== EMOJI_LENGTH) {
        return emoji
    }

    const codePoints = Array.from(emoji).map(indicator => indicator.codePointAt(0)! - REGIONAL_INDICATOR_OFFSET);
    return String.fromCodePoint(...codePoints);
}

export function getFlagSVG(emoji: string): string {
    const countryCode = countryCodeFromFlag(emoji);
    return `https://flag.vercel.app/m/${countryCode}.svg`;
}

export function getTextWithFlagSupport(text: string): ReactElement  {
    const parts = text.split(FLAG_RE);

    return (<span className={"flex items-center gap-1"}>
        {parts.map((part, idx) => {
            if (!part.match(FLAG_RE)) {
                return part;
            }

            return (
                <Image className={"inline"} key={idx} alt={countryCodeFromFlag(part)} src={getFlagSVG(part)} width={14} height={14} />
            )
        })}
    </span>)
}