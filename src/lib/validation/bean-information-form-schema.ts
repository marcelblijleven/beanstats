import {z} from "zod";
import {beanconqueror} from "@/lib/beanconqueror/proto/generated/beanconqueror";
import BeanRoastingType = beanconqueror.BeanRoastingType;
import Roast = beanconqueror.Roast;
import BeanMix = beanconqueror.BeanMix;

function zodEnumFromObjKeys<K extends string> ( obj: Record<K, any> ): z.ZodEnum<[ K, ...K[] ]> {
    const [ firstKey, ...otherKeys ] = Object.keys( obj ) as K[]
    return z.enum( [ firstKey, ...otherKeys ] )
}

export const varietyInformationShape = z.object({
    country: z.optional(z.string()),
    region: z.optional(z.string()),
    farm: z.optional(z.string()),
    farmer: z.optional(z.string()),
    elevation: z.optional(z.string()),
    variety: z.optional(z.string()),
    processing: z.optional(z.string()),
    harvested: z.optional(z.string()),
    percentage: z.optional(z.string()),
    certification: z.optional(z.string()),
    purchasePrice: z.optional(z.string()),
    fobPrice: z.optional(z.string()),
});

export type varietyInformationType = z.infer<typeof varietyInformationShape>

export const beanInformationFormSchema = z.object({
    coffeeName: z.string(),
    roaster: z.optional(z.string()),
    buyDate: z.optional(z.date()),
    roastingDate: z.optional(z.date()),
    beanRoastingType: z.optional(zodEnumFromObjKeys(BeanRoastingType)),
    degreeOfRoast: z.optional(z.array(z.number().min(0).max(5))),
    roast: z.optional(zodEnumFromObjKeys(Roast)),
    beanMix: z.optional(zodEnumFromObjKeys(BeanMix)),
    weight: z.optional(z.string()), // Note: string instead of decimal because of proto
    cost: z.optional(z.string().min(0)), // Note: string instead of decimal because of proto
    flavourProfile: z.optional(z.string()),
    cuppingPoints: z.optional(z.string()),
    decaffeinated: z.optional(z.boolean()),
    website: z.optional(z.string()),
    eanArticle: z.optional(z.string()),
    notes: z.optional(z.string()),
    varietyInformation: z.optional(z.array(varietyInformationShape).min(0))
});

export type beanInformationFormSchema = z.infer<typeof beanInformationFormSchema>;

export const defaultVarietyInformation = {
    country: "",
    region: "",
    farm: "",
    farmer: "",
    elevation: "",
    variety: "",
    processing: "",
    harvested: "",
    percentage: "",
    certification: "",
    purchasePrice: "",
    fobPrice: "",
}