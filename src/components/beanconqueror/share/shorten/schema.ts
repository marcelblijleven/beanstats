import {z} from "zod";
import {BEANCONQUEROR_RE} from "@/lib/beanconqueror/validations/links";

export const shortLinkFormSchema = z.object(
  {
    link: z.string().url().regex(BEANCONQUEROR_RE, {message: "Provide a valid Beanconqueror url"})
  }
);