"use client";

import {type ReactNode, useCallback} from "react";
import {useRouter} from "next/navigation";

function LookingGlass() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function PencilSquare() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  );
}

function Eye() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function Shorten() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
    </svg>
  );
}

function UspIcon({children}: {children: ReactNode}) {
  return (
    <div className={"flex items-center justify-center shrink-0 h-10 w-10 rounded-lg bg-primary text-white group-hover:bg-primary/80"}>
      {children}
    </div>
  );
}

function Usp({title, link, children, icon}: {title: string, link: string, children: ReactNode, icon: ReactNode}) {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push(link);
  }, [router, link]);

  return (
    <section
      className={"flex items-start gap-4 max-w-md h-32 group hover:cursor-pointer"}
        onClick={onClick}
    >
      <UspIcon>{icon}</UspIcon>
      <div className={"h-full gap-2 text-left"}>
        <h3 className={"font-bold group-hover:text-primary"}>{title}</h3>
        {children}
      </div>
    </section>
  );
}

export function BeanconquerorUsp() {
  return (
    <div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 m-4"}>
      <Usp title={"Visualise your coffee data"} link={"/beanconqueror/stats"} icon={<LookingGlass />}>
        Upload your Beanconqueror zip file to visualise your data. View your most popular origin,
        variety, processing or roasters and more.
      </Usp>
      <Usp title={"Create share link"} link={"/beanconqueror/create"} icon={<PencilSquare />}>
        Tired of entering coffee bean information in the Beanconqueror app? Use this form to
        enter data on your choice of device and import it into Beanconqueror.
      </Usp>
      <Usp title={"View share link"} link={"/beanconqueror/view"} icon={<Eye />}>
        Received a Beanconqueror share link? Enter it here to inspect the bean information before importing
        it into the app.
      </Usp>
      <Usp title={"Shorten share link"} link={"/beanconqueror/shorten"} icon={<Shorten />}>
        Beanconqueror share links can be very long, use this service to shorten the link and make it
        easier to share,
      </Usp>
    </div>
  );
}