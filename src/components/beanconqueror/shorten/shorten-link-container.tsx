"use client";

import { useState } from "react";

import { ShortenLinkForm } from "@/components/forms/shorten-link-form";
import ShareCard from "@/components/share-card";
import { type BeanLinkResponse } from "@/lib/beanlink";

export interface ShortenContainerProps {
  link: string | null;
}

export function ShortenContainer(props: ShortenContainerProps) {
  const [data, setData] = useState<BeanLinkResponse | null>(null);

  return (
    <div className={"w-full space-y-4"}>
      <ShortenLinkForm callback={setData} link={props.link} />
      {data && <ShareCard beanLinkResponse={data} />}
    </div>
  );
}
