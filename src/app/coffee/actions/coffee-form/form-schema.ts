import {createInsertSchema} from "drizzle-zod";
import {beans, beanVarieties} from "@/db/schema";
import * as z from "zod";

const varietyInsertSchema = createInsertSchema(beanVarieties, {
    beanId: z.optional(z.number()).nullable(),
});

export const formSchema = createInsertSchema(beans, {
    name: z.string().min(3, {message: "Minimum length should be 3 characters"}),
    roasterId: z.optional(z.number()),
    buyDate: z.optional(z.union([z.date(), z.string()])),
    roastDate: z.optional(z.union([z.date(), z.string()])),
}).omit({userId: true}).extend({
    varieties: z.array(varietyInsertSchema),
    roaster: z.string(),
});

export type Inputs = z.infer<typeof formSchema>;

export const updateFormSchema = createInsertSchema(beans, {
    name: z.optional(z.string()),
    publicId: z.string().length(12, {message: "invalid public id"}),
    roasterId: z.optional(z.number()),
    buyDate: z.optional(z.union([z.date(), z.string()])),
    roastDate: z.optional(z.union([z.date(), z.string()])),
}).extend({
    varieties: z.optional(z.array(varietyInsertSchema)),
    roaster: z.optional(z.string()),
});

export type UpdateInputs = z.infer<typeof updateFormSchema>;
