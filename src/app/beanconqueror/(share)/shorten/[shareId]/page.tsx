import {getShareEntry} from "@/lib/db/shares/get-share-entry";
import {notFound} from "next/navigation";
import CopyContainer from "@/components/copy-container";
import {QRCode} from "@/components/qrcode-card";

export default async function ShareIdPage({params}: {params: {shareId: string}}) {
  const shareEntry = await getShareEntry(params.shareId);

  if (!shareEntry?.beanconquerorUrl) {
    return notFound();
  }

  const shareUrl = `https://beanstats.com/s/${shareEntry.publicId}`;

  return (
    <div className={"flex flex-col items-center space-y-6"}>
      <section className={"text-center max-w-xl space-y-6"}>
        <h1 className={"text-4xl md:text-6xl font-bold text-center"}>
          Share a <span className={"gradient-text"}>Beanconqueror</span> link
        </h1>
        <p className={"text-center"}>
          Your share link has been shortened, copy the link or scan the qrcode with your phone camera.
        </p>
      </section>
      <section className={"w-full text-center"}>
        <h3 className={"text-2xl font-semibold"}>{shareEntry.name}</h3>
        <div className={"italic"}>
          Roasted by {shareEntry.roaster}
        </div>
      </section>
      <CopyContainer value={shareUrl} />
      <QRCode value={shareUrl} />
    </div>
  );
}