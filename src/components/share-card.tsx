import CopyContainer from "@/components/copy-container";
import {QRCode} from "@/components/qrcode-card";
import {type createShareEntry} from "@/lib/db/shares/create-share-entry";
import {getShareUrl} from "@/lib/share/utils";

export type ShareEntryType = NonNullable<Awaited<ReturnType<typeof createShareEntry>>>

export interface CheckedShareEntryType extends ShareEntryType {
  publicId: string;
}

export function ShortShareCard({entry}: {
  entry: CheckedShareEntryType
}) {
  return (
    <section className={"space-y-4"}>
      <div className={"space-y-2"}>
        <div className={"font-semibold"}>Copy links</div>
        <div className={"flex flex-col gap-2 max-w-sm"}>
          <CopyContainer value={getShareUrl(entry.publicId)}/>
          <CopyContainer
            value={`:beans: ${entry.name} ${entry.roaster} <${getShareUrl(entry.publicId)}>`}
            displayValue={"Copy for discord"}
          />
        </div>
        <div className={"font-semibold"}>Scan QR code</div>
        <div className={"text-sm text-secondary-foreground"}>Scan this QR Code with your phone camera</div>
        <QRCode value={getShareUrl(entry.publicId)}/>
      </div>
    </section>
  );
}


export default function ShareCard({shareEntry}: {
  shareEntry: ShareEntryType
}) {
  if (!shareEntry?.publicId) {
    return (
      <section className={"w-full"}>
        <h2 className={"text-3xl font-semibold"}>Oops</h2>
        <div>Something went wrong, please try again</div>
      </section>
    );
  }

  return (
    <section className={"w-full space-y-2"}>
      <h2 className={"text-3xl font-semibold"}>{shareEntry.name}</h2>
      <h2 className={"italic"}>Roasted by {shareEntry.roaster ?? "??"}</h2>
      <div className={"flex flex-col gap-2"}>
        <ShortShareCard entry={shareEntry as CheckedShareEntryType}/>
      </div>
    </section>
  );
}
