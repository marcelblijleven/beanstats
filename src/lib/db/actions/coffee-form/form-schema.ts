import {createInsertSchema} from "drizzle-zod";
import {beans, beanVarieties} from "@/db/schema";
import * as z from "zod";

const varietyInsertSchema = createInsertSchema(beanVarieties, {
    beanId: z.optional(z.number()).nullable(),
});

export const formSchema = createInsertSchema(beans, {
    name: z.string().min(3, {message: "Minimum length should be 3 characters"}),
}).omit({userId: true}).extend({
    publicUserId: z.optional(z.string()),
    varieties: z.array(varietyInsertSchema),
    roaster: z.string(),
});

export type Inputs = z.infer<typeof formSchema>;