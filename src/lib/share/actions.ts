"use server";

import {decodeMessage} from "@/lib/beanconqueror/proto";
import {createShareEntry, type ShareEntryInput} from "@/lib/db/shares/create-share-entry";
import {getShareUrl} from "@/lib/share/utils";

export async function getShortShareEntry(link: string): ReturnType<typeof createShareEntry> {
  const decoded = decodeMessage(link);
  const values: ShareEntryInput = {
    name: decoded.name,
    roaster: decoded.roaster,
    variety: decoded.beanInformation.map(info => info.variety)?.join(", ") ?? "unknown",
    processing: decoded.beanInformation.map(info => info.processing)?.join(", ") ?? "unknown",
    beanconquerorUrl: link,
  };

  return createShareEntry(values);
}

export async function getShortShareLink(link: string): Promise<string | null> {
  const entry = await getShortShareEntry(link);

  if (!entry?.publicId || !entry?.beanconquerorUrl) {
    return null;
  }

  return getShareUrl(entry.publicId);
}
