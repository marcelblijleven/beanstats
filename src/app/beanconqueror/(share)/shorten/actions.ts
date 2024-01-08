"use server";

import {redirect} from "next/navigation";
import {getShortShareEntry} from "@/lib/share/actions";
import {shortLinkFormSchema} from "@/components/beanconqueror/share/shorten/schema";

export type ShortenLinkFormState = {
  error: string | null
}

export async function processShortenLink(prevState: ShortenLinkFormState, formData: FormData): Promise<ShortenLinkFormState> {
  const link = formData.get("link") as string | null;
  const parsed = shortLinkFormSchema.shape.link.safeParse(link);

  if (!parsed.success || !link) {
    return {error: "invalid or missing link provided"};
  }

  const share = await getShortShareEntry(link);

  if (!share?.publicId) {
    return {error: "something went wrong while shortening the link"};
  }

  redirect(`/beanconqueror/shorten/${share.publicId}`);
}
