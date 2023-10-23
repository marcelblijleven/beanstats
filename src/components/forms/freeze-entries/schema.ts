import {createInsertSchema} from "drizzle-zod";
import {z} from "zod";

import {freezeEntries} from "@/db/schema";


export const freezeEntryInsertSchema = createInsertSchema(freezeEntries, {
    publicId: z.string().optional(),
    beanId: z.number().optional(),
    freezeDate: z.union([z.date(), z.string()]),
    label: z.string().nonempty("Cannot be empty"),
    weight: z.string().nonempty("Cannot be empty"),
}).extend({
    beanPublicId: z.string().min(12),
}).omit({userId: true});


export type FreezeEntryInput = z.infer<typeof freezeEntryInsertSchema>;