import {beanconqueror} from "@/lib/beanconqueror/proto/generated/beanconqueror";
import {beanInformationFormSchema} from "@/lib/beanconqueror/validations/bean-information-form-schema";
import BeanProto = beanconqueror.BeanProto;
import BeanInformation = beanconqueror.BeanInformation;
import Config = beanconqueror.Config;
import Roast = beanconqueror.Roast;
import BeanMix = beanconqueror.BeanMix;
import BeanRoastingType = beanconqueror.BeanRoastingType;
import BeanRoastInformation = beanconqueror.BeanRoastInformation;
import ICupping = beanconqueror.ICupping;

const formSchemaToBeanProto = (values: beanInformationFormSchema) => BeanProto.create({
    name: values.coffeeName,
    roastingDate: values.roastingDate?.toISOString() || "",
    note: values.notes || "",
    roaster: values.roaster || "",
    roast: !!values.roast ? Roast[values.roast] : Roast.UNKNOWN_ROAST,
    roastRange: values.degreeOfRoast?.[0] || 0,
    beanMix: !!values.beanMix ? BeanMix[values.beanMix] : BeanMix.UNKNOWN_BEAN_MIX,
    roastCustom: "", // TODO! add form
    config: Config.create({
    }),
    aromatics: values.flavourProfile || "",
    weight: !!values.weight ? parseInt(values.weight) : 0,
    finished: false,
    cost: !!values.cost ? parseInt(values.cost) : 0,
    cuppingPoints: values.cuppingPoints || "",
    decaffeinated: values.decaffeinated !== undefined ? values.decaffeinated : false,
    url: values.website || "",
    eanArticleNumber: values.eanArticle || "",
    rating: 0,
    beanInformation: values.varietyInformation?.map(info => {
        return BeanInformation.create({
            country: info.country || null,
            region: info.region || null,
            farm: info.farm || null,
            farmer: info.farmer || null,
            elevation: info.elevation || null,
            harvestTime: info.harvested || null,
            variety: info.variety || null,
            processing: info.processing || null,
            certification: info.certification || null,
            percentage: !!info.percentage ? parseInt(info.percentage) : null,
            purchasingPrice: !!info.purchasePrice ? parseInt(info.purchasePrice) : null,
            fobPrice: !!info.fobPrice ? parseInt(info.fobPrice) : null,
        })
    }) || [],
    beanRoastingType: values.beanRoastingType ? BeanRoastingType[values.beanRoastingType] : BeanRoastingType.UNKNOWN_BEAN_ROASTING_TYPE,
    beanRoastInformation: BeanRoastInformation.create({
        dropTemperature: 0,
        roastLength: 0,
        roasterMachine: "",
        greenBeanWeight: 0,
        outsideTemperature: 0,
        humidity: 0,
        beanUuid: "",
        firstCrackMinute: 0,
        firstCrackTemperature: 0,
        secondCrackMinute: 0,
        secondCrackTemperature: 0,
    }),
    qrCode: "",
    favourite: false,
    shared: false,
    cupping: ICupping.create({
        dryFragrance: 0,
        wetAroma: 0,
        brightness: 0,
        flavor: 0,
        body: 0,
        finish: 0,
        sweetness: 0,
        cleanCup: 0,
        complexity: 0,
        uniformity: 0,
        cuppersCorrection: 0,
    }),
    cuppedFlavor: {}
});

const buildURL = (encoded: string, limit: number = 400): string => {
    const url = new URL("https://beanconqueror.com");
    const length = Math.ceil(encoded.length / limit);

    for (let i = 0; i < length; i++) {
        const key = `shareUserBean${i}`;
        url.searchParams.set(key, encoded.substring(i * limit, i * limit + limit))
    }

    return url.toString();
}


export const createUrlFromFormSchema = (values: beanInformationFormSchema) => {
    const bytes = BeanProto.encode(formSchemaToBeanProto(values)).finish();
    const encoded = btoa(String.fromCharCode(...Array.from(new Uint8Array(bytes))));
    return buildURL(encoded);

}