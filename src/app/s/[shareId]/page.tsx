import {type Metadata} from "next";
import {notFound, redirect} from "next/navigation";

import {getShareEntry} from "@/lib/db/shares/get-share-entry";

export async function generateMetadata({params}: {params: {shareId: string}}): Promise<Metadata> {
  const shareEntry = await getShareEntry(params.shareId);

  if (!shareEntry) {
    return {
      title: "Beanconqueror import link",
      description: "Provided by Beanstats",
      openGraph: {
        title: "Beanconqueror import link",
        description: "Import this coffee into your Beanconqueror app",
        images: ["/beanconqueror_logo.png"],
      },
    };
  }

  const roaster = !!shareEntry.roaster ? ` roasted by ${shareEntry.roaster ?? "??"}` : "";

  return {
    title: `${shareEntry.name}${roaster}`,
    description: "Provided by Beanstats",
    openGraph: {
      title: "Beanconqueror import link",
      description: "Import this coffee into your Beanconqueror app",
      images: ["/beanconqueror_logo.png"],
    },
  };
}

/**
 * Simple redirect page for a shortened share url
 * @param params
 * @constructor
 */
export default async function ShareLinkPage({params}: {params: {shareId: string}}) {
  const shareEntry = await getShareEntry(params.shareId);

  if (!shareEntry?.beanconquerorUrl) {
    return notFound();
  }

  redirect(shareEntry.beanconquerorUrl);
}