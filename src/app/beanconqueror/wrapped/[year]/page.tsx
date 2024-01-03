import {notFound} from "next/navigation";
import Wrapped from "@/components/beanconqueror/wrapped/wrapped";

export default function WrappedPage({ params }: { params: { year: string } }) {
  const year = parseInt(params.year);

  if (isNaN(year)) return notFound();
  if (year < 2020 || year > new Date().getFullYear()) return notFound();

  return (
    <Wrapped year={year} />
  );
}