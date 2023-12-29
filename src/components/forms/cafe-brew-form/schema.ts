import {z} from "zod";
import {createInsertSchema} from "drizzle-zod";
import {cafeBrews} from "@/db/schema";

const optionalStringWithMinLength = (length: number, name: string) => z.union(
    [z.literal(""), z.string().min(length, `${name} should be at least ${length} characters`)]
).optional();

export const cafeBrewInsertSchema  = createInsertSchema(cafeBrews, {
    type: z.string().min(3, "Type should be at least 3 characters"),
    coffeeVariety: optionalStringWithMinLength(3, "Variety"),
    coffeeOrigin: optionalStringWithMinLength(3, "Origin"),
    cafeCountry: optionalStringWithMinLength(2, "Country"),
    cafeCity: optionalStringWithMinLength(3, "City"),
    rating: z.array(z.number()).nullable(),
    userId: z.number().optional(),
    date: z.optional(z.union([z.date(), z.string()])),
});

export type CafeBrewInputs = z.infer<typeof cafeBrewInsertSchema>