import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace beanconqueror. */
export namespace beanconqueror {

    /** Properties of a BeanProto. */
    interface IBeanProto {

        /** BeanProto name */
        name?: (string|null);

        /** BeanProto buyDate */
        buyDate?: (string|null);

        /** BeanProto roastingDate */
        roastingDate?: (string|null);

        /** BeanProto note */
        note?: (string|null);

        /** BeanProto roaster */
        roaster?: (string|null);

        /** BeanProto config */
        config?: (beanconqueror.IConfig|null);

        /** BeanProto roast */
        roast?: (beanconqueror.Roast|null);

        /** BeanProto roastRange */
        roastRange?: (number|Long|null);

        /** BeanProto beanMix */
        beanMix?: (beanconqueror.BeanMix|null);

        /** BeanProto roastCustom */
        roastCustom?: (string|null);

        /** BeanProto aromatics */
        aromatics?: (string|null);

        /** BeanProto weight */
        weight?: (number|Long|null);

        /** BeanProto finished */
        finished?: (boolean|null);

        /** BeanProto cost */
        cost?: (number|Long|null);

        /** BeanProto attachments */
        attachments?: (string[]|null);

        /** BeanProto cuppingPoints */
        cuppingPoints?: (string|null);

        /** BeanProto decaffeinated */
        decaffeinated?: (boolean|null);

        /** BeanProto url */
        url?: (string|null);

        /** BeanProto eanArticleNumber */
        eanArticleNumber?: (string|null);

        /** BeanProto rating */
        rating?: (number|null);

        /** BeanProto beanInformation */
        beanInformation?: (beanconqueror.IBeanInformation[]|null);

        /** BeanProto beanRoastingType */
        beanRoastingType?: (beanconqueror.BeanRoastingType|null);

        /** BeanProto beanRoastInformation */
        beanRoastInformation?: (beanconqueror.IBeanRoastInformation|null);

        /** BeanProto qrCode */
        qrCode?: (string|null);

        /** BeanProto favourite */
        favourite?: (boolean|null);

        /** BeanProto shared */
        shared?: (boolean|null);

        /** BeanProto cupping */
        cupping?: (beanconqueror.IICupping|null);

        /** BeanProto cuppedFlavor */
        cuppedFlavor?: (beanconqueror.IIFlavor|null);
    }

    /** Represents a BeanProto. */
    class BeanProto implements IBeanProto {

        /**
         * Constructs a new BeanProto.
         * @param [properties] Properties to set
         */
        constructor(properties?: beanconqueror.IBeanProto);

        /** BeanProto name. */
        public name: string;

        /** BeanProto buyDate. */
        public buyDate?: (string|null);

        /** BeanProto roastingDate. */
        public roastingDate?: (string|null);

        /** BeanProto note. */
        public note?: (string|null);

        /** BeanProto roaster. */
        public roaster?: (string|null);

        /** BeanProto config. */
        public config?: (beanconqueror.IConfig|null);

        /** BeanProto roast. */
        public roast?: (beanconqueror.Roast|null);

        /** BeanProto roastRange. */
        public roastRange?: (number|Long|null);

        /** BeanProto beanMix. */
        public beanMix?: (beanconqueror.BeanMix|null);

        /** BeanProto roastCustom. */
        public roastCustom?: (string|null);

        /** BeanProto aromatics. */
        public aromatics?: (string|null);

        /** BeanProto weight. */
        public weight?: (number|Long|null);

        /** BeanProto finished. */
        public finished?: (boolean|null);

        /** BeanProto cost. */
        public cost?: (number|Long|null);

        /** BeanProto attachments. */
        public attachments: string[];

        /** BeanProto cuppingPoints. */
        public cuppingPoints?: (string|null);

        /** BeanProto decaffeinated. */
        public decaffeinated?: (boolean|null);

        /** BeanProto url. */
        public url?: (string|null);

        /** BeanProto eanArticleNumber. */
        public eanArticleNumber?: (string|null);

        /** BeanProto rating. */
        public rating?: (number|null);

        /** BeanProto beanInformation. */
        public beanInformation: beanconqueror.IBeanInformation[];

        /** BeanProto beanRoastingType. */
        public beanRoastingType?: (beanconqueror.BeanRoastingType|null);

        /** BeanProto beanRoastInformation. */
        public beanRoastInformation?: (beanconqueror.IBeanRoastInformation|null);

        /** BeanProto qrCode. */
        public qrCode?: (string|null);

        /** BeanProto favourite. */
        public favourite?: (boolean|null);

        /** BeanProto shared. */
        public shared?: (boolean|null);

        /** BeanProto cupping. */
        public cupping?: (beanconqueror.IICupping|null);

        /** BeanProto cuppedFlavor. */
        public cuppedFlavor?: (beanconqueror.IIFlavor|null);

        /** BeanProto _buyDate. */
        public _buyDate?: "buyDate";

        /** BeanProto _roastingDate. */
        public _roastingDate?: "roastingDate";

        /** BeanProto _note. */
        public _note?: "note";

        /** BeanProto _roaster. */
        public _roaster?: "roaster";

        /** BeanProto _config. */
        public _config?: "config";

        /** BeanProto _roast. */
        public _roast?: "roast";

        /** BeanProto _roastRange. */
        public _roastRange?: "roastRange";

        /** BeanProto _beanMix. */
        public _beanMix?: "beanMix";

        /** BeanProto _roastCustom. */
        public _roastCustom?: "roastCustom";

        /** BeanProto _aromatics. */
        public _aromatics?: "aromatics";

        /** BeanProto _weight. */
        public _weight?: "weight";

        /** BeanProto _finished. */
        public _finished?: "finished";

        /** BeanProto _cost. */
        public _cost?: "cost";

        /** BeanProto _cuppingPoints. */
        public _cuppingPoints?: "cuppingPoints";

        /** BeanProto _decaffeinated. */
        public _decaffeinated?: "decaffeinated";

        /** BeanProto _url. */
        public _url?: "url";

        /** BeanProto _eanArticleNumber. */
        public _eanArticleNumber?: "eanArticleNumber";

        /** BeanProto _rating. */
        public _rating?: "rating";

        /** BeanProto _beanRoastingType. */
        public _beanRoastingType?: "beanRoastingType";

        /** BeanProto _beanRoastInformation. */
        public _beanRoastInformation?: "beanRoastInformation";

        /** BeanProto _qrCode. */
        public _qrCode?: "qrCode";

        /** BeanProto _favourite. */
        public _favourite?: "favourite";

        /** BeanProto _shared. */
        public _shared?: "shared";

        /** BeanProto _cupping. */
        public _cupping?: "cupping";

        /** BeanProto _cuppedFlavor. */
        public _cuppedFlavor?: "cuppedFlavor";

        /**
         * Creates a new BeanProto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeanProto instance
         */
        public static create(properties?: beanconqueror.IBeanProto): beanconqueror.BeanProto;

        /**
         * Encodes the specified BeanProto message. Does not implicitly {@link beanconqueror.BeanProto.verify|verify} messages.
         * @param message BeanProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: beanconqueror.IBeanProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeanProto message, length delimited. Does not implicitly {@link beanconqueror.BeanProto.verify|verify} messages.
         * @param message BeanProto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: beanconqueror.IBeanProto, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeanProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeanProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): beanconqueror.BeanProto;

        /**
         * Decodes a BeanProto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeanProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): beanconqueror.BeanProto;

        /**
         * Verifies a BeanProto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeanProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeanProto
         */
        public static fromObject(object: { [k: string]: any }): beanconqueror.BeanProto;

        /**
         * Creates a plain object from a BeanProto message. Also converts values to other types if specified.
         * @param message BeanProto
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: beanconqueror.BeanProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeanProto to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BeanProto
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Config. */
    interface IConfig {

        /** Config uuid */
        uuid?: (string|null);

        /** Config unixTimestamp */
        unixTimestamp?: (number|Long|null);
    }

    /** Represents a Config. */
    class Config implements IConfig {

        /**
         * Constructs a new Config.
         * @param [properties] Properties to set
         */
        constructor(properties?: beanconqueror.IConfig);

        /** Config uuid. */
        public uuid: string;

        /** Config unixTimestamp. */
        public unixTimestamp: (number|Long);

        /**
         * Creates a new Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Config instance
         */
        public static create(properties?: beanconqueror.IConfig): beanconqueror.Config;

        /**
         * Encodes the specified Config message. Does not implicitly {@link beanconqueror.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: beanconqueror.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link beanconqueror.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: beanconqueror.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): beanconqueror.Config;

        /**
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): beanconqueror.Config;

        /**
         * Verifies a Config message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Config
         */
        public static fromObject(object: { [k: string]: any }): beanconqueror.Config;

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @param message Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: beanconqueror.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Config to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Config
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BeanInformation. */
    interface IBeanInformation {

        /** BeanInformation country */
        country?: (string|null);

        /** BeanInformation region */
        region?: (string|null);

        /** BeanInformation farm */
        farm?: (string|null);

        /** BeanInformation farmer */
        farmer?: (string|null);

        /** BeanInformation elevation */
        elevation?: (string|null);

        /** BeanInformation harvestTime */
        harvestTime?: (string|null);

        /** BeanInformation variety */
        variety?: (string|null);

        /** BeanInformation processing */
        processing?: (string|null);

        /** BeanInformation certification */
        certification?: (string|null);

        /** BeanInformation percentage */
        percentage?: (number|null);

        /** BeanInformation purchasingPrice */
        purchasingPrice?: (number|null);

        /** BeanInformation fobPrice */
        fobPrice?: (number|null);
    }

    /** Represents a BeanInformation. */
    class BeanInformation implements IBeanInformation {

        /**
         * Constructs a new BeanInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: beanconqueror.IBeanInformation);

        /** BeanInformation country. */
        public country?: (string|null);

        /** BeanInformation region. */
        public region?: (string|null);

        /** BeanInformation farm. */
        public farm?: (string|null);

        /** BeanInformation farmer. */
        public farmer?: (string|null);

        /** BeanInformation elevation. */
        public elevation?: (string|null);

        /** BeanInformation harvestTime. */
        public harvestTime?: (string|null);

        /** BeanInformation variety. */
        public variety?: (string|null);

        /** BeanInformation processing. */
        public processing?: (string|null);

        /** BeanInformation certification. */
        public certification?: (string|null);

        /** BeanInformation percentage. */
        public percentage?: (number|null);

        /** BeanInformation purchasingPrice. */
        public purchasingPrice?: (number|null);

        /** BeanInformation fobPrice. */
        public fobPrice?: (number|null);

        /** BeanInformation _country. */
        public _country?: "country";

        /** BeanInformation _region. */
        public _region?: "region";

        /** BeanInformation _farm. */
        public _farm?: "farm";

        /** BeanInformation _farmer. */
        public _farmer?: "farmer";

        /** BeanInformation _elevation. */
        public _elevation?: "elevation";

        /** BeanInformation _harvestTime. */
        public _harvestTime?: "harvestTime";

        /** BeanInformation _variety. */
        public _variety?: "variety";

        /** BeanInformation _processing. */
        public _processing?: "processing";

        /** BeanInformation _certification. */
        public _certification?: "certification";

        /** BeanInformation _percentage. */
        public _percentage?: "percentage";

        /** BeanInformation _purchasingPrice. */
        public _purchasingPrice?: "purchasingPrice";

        /** BeanInformation _fobPrice. */
        public _fobPrice?: "fobPrice";

        /**
         * Creates a new BeanInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeanInformation instance
         */
        public static create(properties?: beanconqueror.IBeanInformation): beanconqueror.BeanInformation;

        /**
         * Encodes the specified BeanInformation message. Does not implicitly {@link beanconqueror.BeanInformation.verify|verify} messages.
         * @param message BeanInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: beanconqueror.IBeanInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeanInformation message, length delimited. Does not implicitly {@link beanconqueror.BeanInformation.verify|verify} messages.
         * @param message BeanInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: beanconqueror.IBeanInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeanInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeanInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): beanconqueror.BeanInformation;

        /**
         * Decodes a BeanInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeanInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): beanconqueror.BeanInformation;

        /**
         * Verifies a BeanInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeanInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeanInformation
         */
        public static fromObject(object: { [k: string]: any }): beanconqueror.BeanInformation;

        /**
         * Creates a plain object from a BeanInformation message. Also converts values to other types if specified.
         * @param message BeanInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: beanconqueror.BeanInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeanInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BeanInformation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BeanRoastInformation. */
    interface IBeanRoastInformation {

        /** BeanRoastInformation dropTemperature */
        dropTemperature?: (number|null);

        /** BeanRoastInformation roastLength */
        roastLength?: (number|Long|null);

        /** BeanRoastInformation roasterMachine */
        roasterMachine?: (string|null);

        /** BeanRoastInformation greenBeanWeight */
        greenBeanWeight?: (number|Long|null);

        /** BeanRoastInformation outsideTemperature */
        outsideTemperature?: (number|null);

        /** BeanRoastInformation humidity */
        humidity?: (number|null);

        /** BeanRoastInformation beanUuid */
        beanUuid?: (string|null);

        /** BeanRoastInformation firstCrackMinute */
        firstCrackMinute?: (number|null);

        /** BeanRoastInformation firstCrackTemperature */
        firstCrackTemperature?: (number|null);

        /** BeanRoastInformation secondCrackMinute */
        secondCrackMinute?: (number|null);

        /** BeanRoastInformation secondCrackTemperature */
        secondCrackTemperature?: (number|null);
    }

    /** Represents a BeanRoastInformation. */
    class BeanRoastInformation implements IBeanRoastInformation {

        /**
         * Constructs a new BeanRoastInformation.
         * @param [properties] Properties to set
         */
        constructor(properties?: beanconqueror.IBeanRoastInformation);

        /** BeanRoastInformation dropTemperature. */
        public dropTemperature?: (number|null);

        /** BeanRoastInformation roastLength. */
        public roastLength?: (number|Long|null);

        /** BeanRoastInformation roasterMachine. */
        public roasterMachine?: (string|null);

        /** BeanRoastInformation greenBeanWeight. */
        public greenBeanWeight?: (number|Long|null);

        /** BeanRoastInformation outsideTemperature. */
        public outsideTemperature?: (number|null);

        /** BeanRoastInformation humidity. */
        public humidity?: (number|null);

        /** BeanRoastInformation beanUuid. */
        public beanUuid?: (string|null);

        /** BeanRoastInformation firstCrackMinute. */
        public firstCrackMinute?: (number|null);

        /** BeanRoastInformation firstCrackTemperature. */
        public firstCrackTemperature?: (number|null);

        /** BeanRoastInformation secondCrackMinute. */
        public secondCrackMinute?: (number|null);

        /** BeanRoastInformation secondCrackTemperature. */
        public secondCrackTemperature?: (number|null);

        /** BeanRoastInformation _dropTemperature. */
        public _dropTemperature?: "dropTemperature";

        /** BeanRoastInformation _roastLength. */
        public _roastLength?: "roastLength";

        /** BeanRoastInformation _roasterMachine. */
        public _roasterMachine?: "roasterMachine";

        /** BeanRoastInformation _greenBeanWeight. */
        public _greenBeanWeight?: "greenBeanWeight";

        /** BeanRoastInformation _outsideTemperature. */
        public _outsideTemperature?: "outsideTemperature";

        /** BeanRoastInformation _humidity. */
        public _humidity?: "humidity";

        /** BeanRoastInformation _beanUuid. */
        public _beanUuid?: "beanUuid";

        /** BeanRoastInformation _firstCrackMinute. */
        public _firstCrackMinute?: "firstCrackMinute";

        /** BeanRoastInformation _firstCrackTemperature. */
        public _firstCrackTemperature?: "firstCrackTemperature";

        /** BeanRoastInformation _secondCrackMinute. */
        public _secondCrackMinute?: "secondCrackMinute";

        /** BeanRoastInformation _secondCrackTemperature. */
        public _secondCrackTemperature?: "secondCrackTemperature";

        /**
         * Creates a new BeanRoastInformation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeanRoastInformation instance
         */
        public static create(properties?: beanconqueror.IBeanRoastInformation): beanconqueror.BeanRoastInformation;

        /**
         * Encodes the specified BeanRoastInformation message. Does not implicitly {@link beanconqueror.BeanRoastInformation.verify|verify} messages.
         * @param message BeanRoastInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: beanconqueror.IBeanRoastInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeanRoastInformation message, length delimited. Does not implicitly {@link beanconqueror.BeanRoastInformation.verify|verify} messages.
         * @param message BeanRoastInformation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: beanconqueror.IBeanRoastInformation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeanRoastInformation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeanRoastInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): beanconqueror.BeanRoastInformation;

        /**
         * Decodes a BeanRoastInformation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeanRoastInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): beanconqueror.BeanRoastInformation;

        /**
         * Verifies a BeanRoastInformation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeanRoastInformation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeanRoastInformation
         */
        public static fromObject(object: { [k: string]: any }): beanconqueror.BeanRoastInformation;

        /**
         * Creates a plain object from a BeanRoastInformation message. Also converts values to other types if specified.
         * @param message BeanRoastInformation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: beanconqueror.BeanRoastInformation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeanRoastInformation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BeanRoastInformation
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ICupping. */
    interface IICupping {

        /** ICupping dryFragrance */
        dryFragrance?: (number|Long|null);

        /** ICupping wetAroma */
        wetAroma?: (number|Long|null);

        /** ICupping brightness */
        brightness?: (number|Long|null);

        /** ICupping flavor */
        flavor?: (number|Long|null);

        /** ICupping body */
        body?: (number|Long|null);

        /** ICupping finish */
        finish?: (number|Long|null);

        /** ICupping sweetness */
        sweetness?: (number|Long|null);

        /** ICupping cleanCup */
        cleanCup?: (number|Long|null);

        /** ICupping complexity */
        complexity?: (number|Long|null);

        /** ICupping uniformity */
        uniformity?: (number|Long|null);

        /** ICupping cuppersCorrection */
        cuppersCorrection?: (number|Long|null);
    }

    /** Represents a ICupping. */
    class ICupping implements IICupping {

        /**
         * Constructs a new ICupping.
         * @param [properties] Properties to set
         */
        constructor(properties?: beanconqueror.IICupping);

        /** ICupping dryFragrance. */
        public dryFragrance?: (number|Long|null);

        /** ICupping wetAroma. */
        public wetAroma?: (number|Long|null);

        /** ICupping brightness. */
        public brightness?: (number|Long|null);

        /** ICupping flavor. */
        public flavor?: (number|Long|null);

        /** ICupping body. */
        public body?: (number|Long|null);

        /** ICupping finish. */
        public finish?: (number|Long|null);

        /** ICupping sweetness. */
        public sweetness?: (number|Long|null);

        /** ICupping cleanCup. */
        public cleanCup?: (number|Long|null);

        /** ICupping complexity. */
        public complexity?: (number|Long|null);

        /** ICupping uniformity. */
        public uniformity?: (number|Long|null);

        /** ICupping cuppersCorrection. */
        public cuppersCorrection?: (number|Long|null);

        /** ICupping _dryFragrance. */
        public _dryFragrance?: "dryFragrance";

        /** ICupping _wetAroma. */
        public _wetAroma?: "wetAroma";

        /** ICupping _brightness. */
        public _brightness?: "brightness";

        /** ICupping _flavor. */
        public _flavor?: "flavor";

        /** ICupping _body. */
        public _body?: "body";

        /** ICupping _finish. */
        public _finish?: "finish";

        /** ICupping _sweetness. */
        public _sweetness?: "sweetness";

        /** ICupping _cleanCup. */
        public _cleanCup?: "cleanCup";

        /** ICupping _complexity. */
        public _complexity?: "complexity";

        /** ICupping _uniformity. */
        public _uniformity?: "uniformity";

        /** ICupping _cuppersCorrection. */
        public _cuppersCorrection?: "cuppersCorrection";

        /**
         * Creates a new ICupping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ICupping instance
         */
        public static create(properties?: beanconqueror.IICupping): beanconqueror.ICupping;

        /**
         * Encodes the specified ICupping message. Does not implicitly {@link beanconqueror.ICupping.verify|verify} messages.
         * @param message ICupping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: beanconqueror.IICupping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ICupping message, length delimited. Does not implicitly {@link beanconqueror.ICupping.verify|verify} messages.
         * @param message ICupping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: beanconqueror.IICupping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ICupping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ICupping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): beanconqueror.ICupping;

        /**
         * Decodes a ICupping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ICupping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): beanconqueror.ICupping;

        /**
         * Verifies a ICupping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ICupping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ICupping
         */
        public static fromObject(object: { [k: string]: any }): beanconqueror.ICupping;

        /**
         * Creates a plain object from a ICupping message. Also converts values to other types if specified.
         * @param message ICupping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: beanconqueror.ICupping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ICupping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ICupping
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a IFlavor. */
    interface IIFlavor {

        /** IFlavor predefinedFlavors */
        predefinedFlavors?: ((number|Long)[]|null);

        /** IFlavor customFlavors */
        customFlavors?: (string[]|null);
    }

    /** Represents a IFlavor. */
    class IFlavor implements IIFlavor {

        /**
         * Constructs a new IFlavor.
         * @param [properties] Properties to set
         */
        constructor(properties?: beanconqueror.IIFlavor);

        /** IFlavor predefinedFlavors. */
        public predefinedFlavors: (number|Long)[];

        /** IFlavor customFlavors. */
        public customFlavors: string[];

        /**
         * Creates a new IFlavor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IFlavor instance
         */
        public static create(properties?: beanconqueror.IIFlavor): beanconqueror.IFlavor;

        /**
         * Encodes the specified IFlavor message. Does not implicitly {@link beanconqueror.IFlavor.verify|verify} messages.
         * @param message IFlavor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: beanconqueror.IIFlavor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IFlavor message, length delimited. Does not implicitly {@link beanconqueror.IFlavor.verify|verify} messages.
         * @param message IFlavor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: beanconqueror.IIFlavor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a IFlavor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IFlavor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): beanconqueror.IFlavor;

        /**
         * Decodes a IFlavor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IFlavor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): beanconqueror.IFlavor;

        /**
         * Verifies a IFlavor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a IFlavor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IFlavor
         */
        public static fromObject(object: { [k: string]: any }): beanconqueror.IFlavor;

        /**
         * Creates a plain object from a IFlavor message. Also converts values to other types if specified.
         * @param message IFlavor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: beanconqueror.IFlavor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IFlavor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for IFlavor
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Roast enum. */
    enum Roast {
        UNKNOWN_ROAST = 0,
        CINNAMON_ROAST = 1,
        AMERICAN_ROAST = 2,
        NEW_ENGLAND_ROAST = 3,
        HALF_CITY_ROAST = 4,
        MODERATE_LIGHT_ROAST = 5,
        CITY_ROAST = 6,
        CITY_PLUS_ROAST = 7,
        FULL_CITY_ROAST = 8,
        FULL_CITY_PLUS_ROAST = 9,
        ITALIAN_ROAST = 10,
        VIEANNA_ROAST = 11,
        FRENCH_ROAST = 12,
        CUSTOM_ROAST = 13
    }

    /** BeanMix enum. */
    enum BeanMix {
        UNKNOWN_BEAN_MIX = 0,
        SINGLE_ORIGIN = 1,
        BLEND = 2
    }

    /** BeanRoastingType enum. */
    enum BeanRoastingType {
        UNKNOWN_BEAN_ROASTING_TYPE ,
        FILTER,
        ESPRESSO,
        OMNI
    }
}
