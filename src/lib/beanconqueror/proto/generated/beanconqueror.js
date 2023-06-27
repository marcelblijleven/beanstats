/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const beanconqueror = $root.beanconqueror = (() => {

    /**
     * Namespace beanconqueror.
     * @exports beanconqueror
     * @namespace
     */
    const beanconqueror = {};

    beanconqueror.BeanProto = (function() {

        /**
         * Properties of a BeanProto.
         * @memberof beanconqueror
         * @interface IBeanProto
         * @property {string|null} [name] BeanProto name
         * @property {string|null} [buyDate] BeanProto buyDate
         * @property {string|null} [roastingDate] BeanProto roastingDate
         * @property {string|null} [note] BeanProto note
         * @property {string|null} [roaster] BeanProto roaster
         * @property {beanconqueror.IConfig|null} [config] BeanProto config
         * @property {beanconqueror.Roast|null} [roast] BeanProto roast
         * @property {number|Long|null} [roastRange] BeanProto roastRange
         * @property {beanconqueror.BeanMix|null} [beanMix] BeanProto beanMix
         * @property {string|null} [roastCustom] BeanProto roastCustom
         * @property {string|null} [aromatics] BeanProto aromatics
         * @property {number|Long|null} [weight] BeanProto weight
         * @property {boolean|null} [finished] BeanProto finished
         * @property {number|Long|null} [cost] BeanProto cost
         * @property {Array.<string>|null} [attachments] BeanProto attachments
         * @property {string|null} [cuppingPoints] BeanProto cuppingPoints
         * @property {boolean|null} [decaffeinated] BeanProto decaffeinated
         * @property {string|null} [url] BeanProto url
         * @property {string|null} [eanArticleNumber] BeanProto eanArticleNumber
         * @property {number|null} [rating] BeanProto rating
         * @property {Array.<beanconqueror.IBeanInformation>|null} [beanInformation] BeanProto beanInformation
         * @property {beanconqueror.BeanRoastingType|null} [beanRoastingType] BeanProto beanRoastingType
         * @property {beanconqueror.IBeanRoastInformation|null} [beanRoastInformation] BeanProto beanRoastInformation
         * @property {string|null} [qrCode] BeanProto qrCode
         * @property {boolean|null} [favourite] BeanProto favourite
         * @property {boolean|null} [shared] BeanProto shared
         * @property {beanconqueror.IICupping|null} [cupping] BeanProto cupping
         * @property {beanconqueror.IIFlavor|null} [cuppedFlavor] BeanProto cuppedFlavor
         */

        /**
         * Constructs a new BeanProto.
         * @memberof beanconqueror
         * @classdesc Represents a BeanProto.
         * @implements IBeanProto
         * @constructor
         * @param {beanconqueror.IBeanProto=} [properties] Properties to set
         */
        function BeanProto(properties) {
            this.attachments = [];
            this.beanInformation = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BeanProto name.
         * @member {string} name
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.name = "";

        /**
         * BeanProto buyDate.
         * @member {string|null|undefined} buyDate
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.buyDate = null;

        /**
         * BeanProto roastingDate.
         * @member {string|null|undefined} roastingDate
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.roastingDate = null;

        /**
         * BeanProto note.
         * @member {string|null|undefined} note
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.note = null;

        /**
         * BeanProto roaster.
         * @member {string|null|undefined} roaster
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.roaster = null;

        /**
         * BeanProto config.
         * @member {beanconqueror.IConfig|null|undefined} config
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.config = null;

        /**
         * BeanProto roast.
         * @member {beanconqueror.Roast|null|undefined} roast
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.roast = null;

        /**
         * BeanProto roastRange.
         * @member {number|Long|null|undefined} roastRange
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.roastRange = null;

        /**
         * BeanProto beanMix.
         * @member {beanconqueror.BeanMix|null|undefined} beanMix
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.beanMix = null;

        /**
         * BeanProto roastCustom.
         * @member {string|null|undefined} roastCustom
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.roastCustom = null;

        /**
         * BeanProto aromatics.
         * @member {string|null|undefined} aromatics
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.aromatics = null;

        /**
         * BeanProto weight.
         * @member {number|Long|null|undefined} weight
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.weight = null;

        /**
         * BeanProto finished.
         * @member {boolean|null|undefined} finished
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.finished = null;

        /**
         * BeanProto cost.
         * @member {number|Long|null|undefined} cost
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.cost = null;

        /**
         * BeanProto attachments.
         * @member {Array.<string>} attachments
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.attachments = $util.emptyArray;

        /**
         * BeanProto cuppingPoints.
         * @member {string|null|undefined} cuppingPoints
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.cuppingPoints = null;

        /**
         * BeanProto decaffeinated.
         * @member {boolean|null|undefined} decaffeinated
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.decaffeinated = null;

        /**
         * BeanProto url.
         * @member {string|null|undefined} url
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.url = null;

        /**
         * BeanProto eanArticleNumber.
         * @member {string|null|undefined} eanArticleNumber
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.eanArticleNumber = null;

        /**
         * BeanProto rating.
         * @member {number|null|undefined} rating
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.rating = null;

        /**
         * BeanProto beanInformation.
         * @member {Array.<beanconqueror.IBeanInformation>} beanInformation
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.beanInformation = $util.emptyArray;

        /**
         * BeanProto beanRoastingType.
         * @member {beanconqueror.BeanRoastingType|null|undefined} beanRoastingType
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.beanRoastingType = null;

        /**
         * BeanProto beanRoastInformation.
         * @member {beanconqueror.IBeanRoastInformation|null|undefined} beanRoastInformation
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.beanRoastInformation = null;

        /**
         * BeanProto qrCode.
         * @member {string|null|undefined} qrCode
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.qrCode = null;

        /**
         * BeanProto favourite.
         * @member {boolean|null|undefined} favourite
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.favourite = null;

        /**
         * BeanProto shared.
         * @member {boolean|null|undefined} shared
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.shared = null;

        /**
         * BeanProto cupping.
         * @member {beanconqueror.IICupping|null|undefined} cupping
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.cupping = null;

        /**
         * BeanProto cuppedFlavor.
         * @member {beanconqueror.IIFlavor|null|undefined} cuppedFlavor
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        BeanProto.prototype.cuppedFlavor = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * BeanProto _buyDate.
         * @member {"buyDate"|undefined} _buyDate
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_buyDate", {
            get: $util.oneOfGetter($oneOfFields = ["buyDate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _roastingDate.
         * @member {"roastingDate"|undefined} _roastingDate
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_roastingDate", {
            get: $util.oneOfGetter($oneOfFields = ["roastingDate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _note.
         * @member {"note"|undefined} _note
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_note", {
            get: $util.oneOfGetter($oneOfFields = ["note"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _roaster.
         * @member {"roaster"|undefined} _roaster
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_roaster", {
            get: $util.oneOfGetter($oneOfFields = ["roaster"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _config.
         * @member {"config"|undefined} _config
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_config", {
            get: $util.oneOfGetter($oneOfFields = ["config"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _roast.
         * @member {"roast"|undefined} _roast
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_roast", {
            get: $util.oneOfGetter($oneOfFields = ["roast"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _roastRange.
         * @member {"roastRange"|undefined} _roastRange
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_roastRange", {
            get: $util.oneOfGetter($oneOfFields = ["roastRange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _beanMix.
         * @member {"beanMix"|undefined} _beanMix
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_beanMix", {
            get: $util.oneOfGetter($oneOfFields = ["beanMix"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _roastCustom.
         * @member {"roastCustom"|undefined} _roastCustom
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_roastCustom", {
            get: $util.oneOfGetter($oneOfFields = ["roastCustom"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _aromatics.
         * @member {"aromatics"|undefined} _aromatics
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_aromatics", {
            get: $util.oneOfGetter($oneOfFields = ["aromatics"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _weight.
         * @member {"weight"|undefined} _weight
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_weight", {
            get: $util.oneOfGetter($oneOfFields = ["weight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _finished.
         * @member {"finished"|undefined} _finished
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_finished", {
            get: $util.oneOfGetter($oneOfFields = ["finished"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _cost.
         * @member {"cost"|undefined} _cost
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_cost", {
            get: $util.oneOfGetter($oneOfFields = ["cost"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _cuppingPoints.
         * @member {"cuppingPoints"|undefined} _cuppingPoints
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_cuppingPoints", {
            get: $util.oneOfGetter($oneOfFields = ["cuppingPoints"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _decaffeinated.
         * @member {"decaffeinated"|undefined} _decaffeinated
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_decaffeinated", {
            get: $util.oneOfGetter($oneOfFields = ["decaffeinated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _url.
         * @member {"url"|undefined} _url
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_url", {
            get: $util.oneOfGetter($oneOfFields = ["url"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _eanArticleNumber.
         * @member {"eanArticleNumber"|undefined} _eanArticleNumber
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_eanArticleNumber", {
            get: $util.oneOfGetter($oneOfFields = ["eanArticleNumber"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _rating.
         * @member {"rating"|undefined} _rating
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_rating", {
            get: $util.oneOfGetter($oneOfFields = ["rating"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _beanRoastingType.
         * @member {"beanRoastingType"|undefined} _beanRoastingType
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_beanRoastingType", {
            get: $util.oneOfGetter($oneOfFields = ["beanRoastingType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _beanRoastInformation.
         * @member {"beanRoastInformation"|undefined} _beanRoastInformation
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_beanRoastInformation", {
            get: $util.oneOfGetter($oneOfFields = ["beanRoastInformation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _qrCode.
         * @member {"qrCode"|undefined} _qrCode
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_qrCode", {
            get: $util.oneOfGetter($oneOfFields = ["qrCode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _favourite.
         * @member {"favourite"|undefined} _favourite
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_favourite", {
            get: $util.oneOfGetter($oneOfFields = ["favourite"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _shared.
         * @member {"shared"|undefined} _shared
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_shared", {
            get: $util.oneOfGetter($oneOfFields = ["shared"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _cupping.
         * @member {"cupping"|undefined} _cupping
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_cupping", {
            get: $util.oneOfGetter($oneOfFields = ["cupping"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanProto _cuppedFlavor.
         * @member {"cuppedFlavor"|undefined} _cuppedFlavor
         * @memberof beanconqueror.BeanProto
         * @instance
         */
        Object.defineProperty(BeanProto.prototype, "_cuppedFlavor", {
            get: $util.oneOfGetter($oneOfFields = ["cuppedFlavor"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BeanProto instance using the specified properties.
         * @function create
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {beanconqueror.IBeanProto=} [properties] Properties to set
         * @returns {beanconqueror.BeanProto} BeanProto instance
         */
        BeanProto.create = function create(properties) {
            return new BeanProto(properties);
        };

        /**
         * Encodes the specified BeanProto message. Does not implicitly {@link beanconqueror.BeanProto.verify|verify} messages.
         * @function encode
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {beanconqueror.IBeanProto} message BeanProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeanProto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.buyDate != null && Object.hasOwnProperty.call(message, "buyDate"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.buyDate);
            if (message.roastingDate != null && Object.hasOwnProperty.call(message, "roastingDate"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roastingDate);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.note);
            if (message.roaster != null && Object.hasOwnProperty.call(message, "roaster"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.roaster);
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.beanconqueror.Config.encode(message.config, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.roast != null && Object.hasOwnProperty.call(message, "roast"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.roast);
            if (message.roastRange != null && Object.hasOwnProperty.call(message, "roastRange"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.roastRange);
            if (message.beanMix != null && Object.hasOwnProperty.call(message, "beanMix"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.beanMix);
            if (message.roastCustom != null && Object.hasOwnProperty.call(message, "roastCustom"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.roastCustom);
            if (message.aromatics != null && Object.hasOwnProperty.call(message, "aromatics"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.aromatics);
            if (message.weight != null && Object.hasOwnProperty.call(message, "weight"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.weight);
            if (message.finished != null && Object.hasOwnProperty.call(message, "finished"))
                writer.uint32(/* id 13, wireType 0 =*/104).bool(message.finished);
            if (message.cost != null && Object.hasOwnProperty.call(message, "cost"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint64(message.cost);
            if (message.attachments != null && message.attachments.length)
                for (let i = 0; i < message.attachments.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.attachments[i]);
            if (message.cuppingPoints != null && Object.hasOwnProperty.call(message, "cuppingPoints"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.cuppingPoints);
            if (message.decaffeinated != null && Object.hasOwnProperty.call(message, "decaffeinated"))
                writer.uint32(/* id 17, wireType 0 =*/136).bool(message.decaffeinated);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.url);
            if (message.eanArticleNumber != null && Object.hasOwnProperty.call(message, "eanArticleNumber"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.eanArticleNumber);
            if (message.rating != null && Object.hasOwnProperty.call(message, "rating"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.rating);
            if (message.beanInformation != null && message.beanInformation.length)
                for (let i = 0; i < message.beanInformation.length; ++i)
                    $root.beanconqueror.BeanInformation.encode(message.beanInformation[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.beanRoastingType != null && Object.hasOwnProperty.call(message, "beanRoastingType"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.beanRoastingType);
            if (message.beanRoastInformation != null && Object.hasOwnProperty.call(message, "beanRoastInformation"))
                $root.beanconqueror.BeanRoastInformation.encode(message.beanRoastInformation, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.qrCode != null && Object.hasOwnProperty.call(message, "qrCode"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.qrCode);
            if (message.favourite != null && Object.hasOwnProperty.call(message, "favourite"))
                writer.uint32(/* id 25, wireType 0 =*/200).bool(message.favourite);
            if (message.shared != null && Object.hasOwnProperty.call(message, "shared"))
                writer.uint32(/* id 26, wireType 0 =*/208).bool(message.shared);
            if (message.cupping != null && Object.hasOwnProperty.call(message, "cupping"))
                $root.beanconqueror.ICupping.encode(message.cupping, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.cuppedFlavor != null && Object.hasOwnProperty.call(message, "cuppedFlavor"))
                $root.beanconqueror.IFlavor.encode(message.cuppedFlavor, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BeanProto message, length delimited. Does not implicitly {@link beanconqueror.BeanProto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {beanconqueror.IBeanProto} message BeanProto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeanProto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeanProto message from the specified reader or buffer.
         * @function decode
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {beanconqueror.BeanProto} BeanProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeanProto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.beanconqueror.BeanProto();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.buyDate = reader.string();
                        break;
                    }
                case 3: {
                        message.roastingDate = reader.string();
                        break;
                    }
                case 4: {
                        message.note = reader.string();
                        break;
                    }
                case 5: {
                        message.roaster = reader.string();
                        break;
                    }
                case 6: {
                        message.config = $root.beanconqueror.Config.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.roast = reader.int32();
                        break;
                    }
                case 8: {
                        message.roastRange = reader.uint64();
                        break;
                    }
                case 9: {
                        message.beanMix = reader.int32();
                        break;
                    }
                case 10: {
                        message.roastCustom = reader.string();
                        break;
                    }
                case 11: {
                        message.aromatics = reader.string();
                        break;
                    }
                case 12: {
                        message.weight = reader.uint64();
                        break;
                    }
                case 13: {
                        message.finished = reader.bool();
                        break;
                    }
                case 14: {
                        message.cost = reader.uint64();
                        break;
                    }
                case 15: {
                        if (!(message.attachments && message.attachments.length))
                            message.attachments = [];
                        message.attachments.push(reader.string());
                        break;
                    }
                case 16: {
                        message.cuppingPoints = reader.string();
                        break;
                    }
                case 17: {
                        message.decaffeinated = reader.bool();
                        break;
                    }
                case 18: {
                        message.url = reader.string();
                        break;
                    }
                case 19: {
                        message.eanArticleNumber = reader.string();
                        break;
                    }
                case 20: {
                        message.rating = reader.uint32();
                        break;
                    }
                case 21: {
                        if (!(message.beanInformation && message.beanInformation.length))
                            message.beanInformation = [];
                        message.beanInformation.push($root.beanconqueror.BeanInformation.decode(reader, reader.uint32()));
                        break;
                    }
                case 22: {
                        message.beanRoastingType = reader.int32();
                        break;
                    }
                case 23: {
                        message.beanRoastInformation = $root.beanconqueror.BeanRoastInformation.decode(reader, reader.uint32());
                        break;
                    }
                case 24: {
                        message.qrCode = reader.string();
                        break;
                    }
                case 25: {
                        message.favourite = reader.bool();
                        break;
                    }
                case 26: {
                        message.shared = reader.bool();
                        break;
                    }
                case 27: {
                        message.cupping = $root.beanconqueror.ICupping.decode(reader, reader.uint32());
                        break;
                    }
                case 28: {
                        message.cuppedFlavor = $root.beanconqueror.IFlavor.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BeanProto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {beanconqueror.BeanProto} BeanProto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeanProto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeanProto message.
         * @function verify
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeanProto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.buyDate != null && message.hasOwnProperty("buyDate")) {
                properties._buyDate = 1;
                if (!$util.isString(message.buyDate))
                    return "buyDate: string expected";
            }
            if (message.roastingDate != null && message.hasOwnProperty("roastingDate")) {
                properties._roastingDate = 1;
                if (!$util.isString(message.roastingDate))
                    return "roastingDate: string expected";
            }
            if (message.note != null && message.hasOwnProperty("note")) {
                properties._note = 1;
                if (!$util.isString(message.note))
                    return "note: string expected";
            }
            if (message.roaster != null && message.hasOwnProperty("roaster")) {
                properties._roaster = 1;
                if (!$util.isString(message.roaster))
                    return "roaster: string expected";
            }
            if (message.config != null && message.hasOwnProperty("config")) {
                properties._config = 1;
                {
                    let error = $root.beanconqueror.Config.verify(message.config);
                    if (error)
                        return "config." + error;
                }
            }
            if (message.roast != null && message.hasOwnProperty("roast")) {
                properties._roast = 1;
                switch (message.roast) {
                default:
                    return "roast: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            }
            if (message.roastRange != null && message.hasOwnProperty("roastRange")) {
                properties._roastRange = 1;
                if (!$util.isInteger(message.roastRange) && !(message.roastRange && $util.isInteger(message.roastRange.low) && $util.isInteger(message.roastRange.high)))
                    return "roastRange: integer|Long expected";
            }
            if (message.beanMix != null && message.hasOwnProperty("beanMix")) {
                properties._beanMix = 1;
                switch (message.beanMix) {
                default:
                    return "beanMix: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.roastCustom != null && message.hasOwnProperty("roastCustom")) {
                properties._roastCustom = 1;
                if (!$util.isString(message.roastCustom))
                    return "roastCustom: string expected";
            }
            if (message.aromatics != null && message.hasOwnProperty("aromatics")) {
                properties._aromatics = 1;
                if (!$util.isString(message.aromatics))
                    return "aromatics: string expected";
            }
            if (message.weight != null && message.hasOwnProperty("weight")) {
                properties._weight = 1;
                if (!$util.isInteger(message.weight) && !(message.weight && $util.isInteger(message.weight.low) && $util.isInteger(message.weight.high)))
                    return "weight: integer|Long expected";
            }
            if (message.finished != null && message.hasOwnProperty("finished")) {
                properties._finished = 1;
                if (typeof message.finished !== "boolean")
                    return "finished: boolean expected";
            }
            if (message.cost != null && message.hasOwnProperty("cost")) {
                properties._cost = 1;
                if (!$util.isInteger(message.cost) && !(message.cost && $util.isInteger(message.cost.low) && $util.isInteger(message.cost.high)))
                    return "cost: integer|Long expected";
            }
            if (message.attachments != null && message.hasOwnProperty("attachments")) {
                if (!Array.isArray(message.attachments))
                    return "attachments: array expected";
                for (let i = 0; i < message.attachments.length; ++i)
                    if (!$util.isString(message.attachments[i]))
                        return "attachments: string[] expected";
            }
            if (message.cuppingPoints != null && message.hasOwnProperty("cuppingPoints")) {
                properties._cuppingPoints = 1;
                if (!$util.isString(message.cuppingPoints))
                    return "cuppingPoints: string expected";
            }
            if (message.decaffeinated != null && message.hasOwnProperty("decaffeinated")) {
                properties._decaffeinated = 1;
                if (typeof message.decaffeinated !== "boolean")
                    return "decaffeinated: boolean expected";
            }
            if (message.url != null && message.hasOwnProperty("url")) {
                properties._url = 1;
                if (!$util.isString(message.url))
                    return "url: string expected";
            }
            if (message.eanArticleNumber != null && message.hasOwnProperty("eanArticleNumber")) {
                properties._eanArticleNumber = 1;
                if (!$util.isString(message.eanArticleNumber))
                    return "eanArticleNumber: string expected";
            }
            if (message.rating != null && message.hasOwnProperty("rating")) {
                properties._rating = 1;
                if (!$util.isInteger(message.rating))
                    return "rating: integer expected";
            }
            if (message.beanInformation != null && message.hasOwnProperty("beanInformation")) {
                if (!Array.isArray(message.beanInformation))
                    return "beanInformation: array expected";
                for (let i = 0; i < message.beanInformation.length; ++i) {
                    let error = $root.beanconqueror.BeanInformation.verify(message.beanInformation[i]);
                    if (error)
                        return "beanInformation." + error;
                }
            }
            if (message.beanRoastingType != null && message.hasOwnProperty("beanRoastingType")) {
                properties._beanRoastingType = 1;
                switch (message.beanRoastingType) {
                default:
                    return "beanRoastingType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            }
            if (message.beanRoastInformation != null && message.hasOwnProperty("beanRoastInformation")) {
                properties._beanRoastInformation = 1;
                {
                    let error = $root.beanconqueror.BeanRoastInformation.verify(message.beanRoastInformation);
                    if (error)
                        return "beanRoastInformation." + error;
                }
            }
            if (message.qrCode != null && message.hasOwnProperty("qrCode")) {
                properties._qrCode = 1;
                if (!$util.isString(message.qrCode))
                    return "qrCode: string expected";
            }
            if (message.favourite != null && message.hasOwnProperty("favourite")) {
                properties._favourite = 1;
                if (typeof message.favourite !== "boolean")
                    return "favourite: boolean expected";
            }
            if (message.shared != null && message.hasOwnProperty("shared")) {
                properties._shared = 1;
                if (typeof message.shared !== "boolean")
                    return "shared: boolean expected";
            }
            if (message.cupping != null && message.hasOwnProperty("cupping")) {
                properties._cupping = 1;
                {
                    let error = $root.beanconqueror.ICupping.verify(message.cupping);
                    if (error)
                        return "cupping." + error;
                }
            }
            if (message.cuppedFlavor != null && message.hasOwnProperty("cuppedFlavor")) {
                properties._cuppedFlavor = 1;
                {
                    let error = $root.beanconqueror.IFlavor.verify(message.cuppedFlavor);
                    if (error)
                        return "cuppedFlavor." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BeanProto message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {beanconqueror.BeanProto} BeanProto
         */
        BeanProto.fromObject = function fromObject(object) {
            if (object instanceof $root.beanconqueror.BeanProto)
                return object;
            let message = new $root.beanconqueror.BeanProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.buyDate != null)
                message.buyDate = String(object.buyDate);
            if (object.roastingDate != null)
                message.roastingDate = String(object.roastingDate);
            if (object.note != null)
                message.note = String(object.note);
            if (object.roaster != null)
                message.roaster = String(object.roaster);
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".beanconqueror.BeanProto.config: object expected");
                message.config = $root.beanconqueror.Config.fromObject(object.config);
            }
            switch (object.roast) {
            default:
                if (typeof object.roast === "number") {
                    message.roast = object.roast;
                    break;
                }
                break;
            case "UNKNOWN_ROAST":
            case 0:
                message.roast = 0;
                break;
            case "CINNAMON_ROAST":
            case 1:
                message.roast = 1;
                break;
            case "AMERICAN_ROAST":
            case 2:
                message.roast = 2;
                break;
            case "NEW_ENGLAND_ROAST":
            case 3:
                message.roast = 3;
                break;
            case "HALF_CITY_ROAST":
            case 4:
                message.roast = 4;
                break;
            case "MODERATE_LIGHT_ROAST":
            case 5:
                message.roast = 5;
                break;
            case "CITY_ROAST":
            case 6:
                message.roast = 6;
                break;
            case "CITY_PLUS_ROAST":
            case 7:
                message.roast = 7;
                break;
            case "FULL_CITY_ROAST":
            case 8:
                message.roast = 8;
                break;
            case "FULL_CITY_PLUS_ROAST":
            case 9:
                message.roast = 9;
                break;
            case "ITALIAN_ROAST":
            case 10:
                message.roast = 10;
                break;
            case "VIEANNA_ROAST":
            case 11:
                message.roast = 11;
                break;
            case "FRENCH_ROAST":
            case 12:
                message.roast = 12;
                break;
            case "CUSTOM_ROAST":
            case 13:
                message.roast = 13;
                break;
            }
            if (object.roastRange != null)
                if ($util.Long)
                    (message.roastRange = $util.Long.fromValue(object.roastRange)).unsigned = true;
                else if (typeof object.roastRange === "string")
                    message.roastRange = parseInt(object.roastRange, 10);
                else if (typeof object.roastRange === "number")
                    message.roastRange = object.roastRange;
                else if (typeof object.roastRange === "object")
                    message.roastRange = new $util.LongBits(object.roastRange.low >>> 0, object.roastRange.high >>> 0).toNumber(true);
            switch (object.beanMix) {
            default:
                if (typeof object.beanMix === "number") {
                    message.beanMix = object.beanMix;
                    break;
                }
                break;
            case "UNKNOWN_BEAN_MIX":
            case 0:
                message.beanMix = 0;
                break;
            case "SINGLE_ORIGIN":
            case 1:
                message.beanMix = 1;
                break;
            case "BLEND":
            case 2:
                message.beanMix = 2;
                break;
            }
            if (object.roastCustom != null)
                message.roastCustom = String(object.roastCustom);
            if (object.aromatics != null)
                message.aromatics = String(object.aromatics);
            if (object.weight != null)
                if ($util.Long)
                    (message.weight = $util.Long.fromValue(object.weight)).unsigned = true;
                else if (typeof object.weight === "string")
                    message.weight = parseInt(object.weight, 10);
                else if (typeof object.weight === "number")
                    message.weight = object.weight;
                else if (typeof object.weight === "object")
                    message.weight = new $util.LongBits(object.weight.low >>> 0, object.weight.high >>> 0).toNumber(true);
            if (object.finished != null)
                message.finished = Boolean(object.finished);
            if (object.cost != null)
                if ($util.Long)
                    (message.cost = $util.Long.fromValue(object.cost)).unsigned = true;
                else if (typeof object.cost === "string")
                    message.cost = parseInt(object.cost, 10);
                else if (typeof object.cost === "number")
                    message.cost = object.cost;
                else if (typeof object.cost === "object")
                    message.cost = new $util.LongBits(object.cost.low >>> 0, object.cost.high >>> 0).toNumber(true);
            if (object.attachments) {
                if (!Array.isArray(object.attachments))
                    throw TypeError(".beanconqueror.BeanProto.attachments: array expected");
                message.attachments = [];
                for (let i = 0; i < object.attachments.length; ++i)
                    message.attachments[i] = String(object.attachments[i]);
            }
            if (object.cuppingPoints != null)
                message.cuppingPoints = String(object.cuppingPoints);
            if (object.decaffeinated != null)
                message.decaffeinated = Boolean(object.decaffeinated);
            if (object.url != null)
                message.url = String(object.url);
            if (object.eanArticleNumber != null)
                message.eanArticleNumber = String(object.eanArticleNumber);
            if (object.rating != null)
                message.rating = object.rating >>> 0;
            if (object.beanInformation) {
                if (!Array.isArray(object.beanInformation))
                    throw TypeError(".beanconqueror.BeanProto.beanInformation: array expected");
                message.beanInformation = [];
                for (let i = 0; i < object.beanInformation.length; ++i) {
                    if (typeof object.beanInformation[i] !== "object")
                        throw TypeError(".beanconqueror.BeanProto.beanInformation: object expected");
                    message.beanInformation[i] = $root.beanconqueror.BeanInformation.fromObject(object.beanInformation[i]);
                }
            }
            switch (object.beanRoastingType) {
            default:
                if (typeof object.beanRoastingType === "number") {
                    message.beanRoastingType = object.beanRoastingType;
                    break;
                }
                break;
            case "UNKNOWN_BEAN_ROASTING_TYPE":
            case 0:
                message.beanRoastingType = 0;
                break;
            case "FILTER":
            case 1:
                message.beanRoastingType = 1;
                break;
            case "ESPRESSO":
            case 2:
                message.beanRoastingType = 2;
                break;
            case "OMNI":
            case 3:
                message.beanRoastingType = 3;
                break;
            }
            if (object.beanRoastInformation != null) {
                if (typeof object.beanRoastInformation !== "object")
                    throw TypeError(".beanconqueror.BeanProto.beanRoastInformation: object expected");
                message.beanRoastInformation = $root.beanconqueror.BeanRoastInformation.fromObject(object.beanRoastInformation);
            }
            if (object.qrCode != null)
                message.qrCode = String(object.qrCode);
            if (object.favourite != null)
                message.favourite = Boolean(object.favourite);
            if (object.shared != null)
                message.shared = Boolean(object.shared);
            if (object.cupping != null) {
                if (typeof object.cupping !== "object")
                    throw TypeError(".beanconqueror.BeanProto.cupping: object expected");
                message.cupping = $root.beanconqueror.ICupping.fromObject(object.cupping);
            }
            if (object.cuppedFlavor != null) {
                if (typeof object.cuppedFlavor !== "object")
                    throw TypeError(".beanconqueror.BeanProto.cuppedFlavor: object expected");
                message.cuppedFlavor = $root.beanconqueror.IFlavor.fromObject(object.cuppedFlavor);
            }
            return message;
        };

        /**
         * Creates a plain object from a BeanProto message. Also converts values to other types if specified.
         * @function toObject
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {beanconqueror.BeanProto} message BeanProto
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeanProto.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.attachments = [];
                object.beanInformation = [];
            }
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.buyDate != null && message.hasOwnProperty("buyDate")) {
                object.buyDate = message.buyDate;
                if (options.oneofs)
                    object._buyDate = "buyDate";
            }
            if (message.roastingDate != null && message.hasOwnProperty("roastingDate")) {
                object.roastingDate = message.roastingDate;
                if (options.oneofs)
                    object._roastingDate = "roastingDate";
            }
            if (message.note != null && message.hasOwnProperty("note")) {
                object.note = message.note;
                if (options.oneofs)
                    object._note = "note";
            }
            if (message.roaster != null && message.hasOwnProperty("roaster")) {
                object.roaster = message.roaster;
                if (options.oneofs)
                    object._roaster = "roaster";
            }
            if (message.config != null && message.hasOwnProperty("config")) {
                object.config = $root.beanconqueror.Config.toObject(message.config, options);
                if (options.oneofs)
                    object._config = "config";
            }
            if (message.roast != null && message.hasOwnProperty("roast")) {
                object.roast = options.enums === String ? $root.beanconqueror.Roast[message.roast] === undefined ? message.roast : $root.beanconqueror.Roast[message.roast] : message.roast;
                if (options.oneofs)
                    object._roast = "roast";
            }
            if (message.roastRange != null && message.hasOwnProperty("roastRange")) {
                if (typeof message.roastRange === "number")
                    object.roastRange = options.longs === String ? String(message.roastRange) : message.roastRange;
                else
                    object.roastRange = options.longs === String ? $util.Long.prototype.toString.call(message.roastRange) : options.longs === Number ? new $util.LongBits(message.roastRange.low >>> 0, message.roastRange.high >>> 0).toNumber(true) : message.roastRange;
                if (options.oneofs)
                    object._roastRange = "roastRange";
            }
            if (message.beanMix != null && message.hasOwnProperty("beanMix")) {
                object.beanMix = options.enums === String ? $root.beanconqueror.BeanMix[message.beanMix] === undefined ? message.beanMix : $root.beanconqueror.BeanMix[message.beanMix] : message.beanMix;
                if (options.oneofs)
                    object._beanMix = "beanMix";
            }
            if (message.roastCustom != null && message.hasOwnProperty("roastCustom")) {
                object.roastCustom = message.roastCustom;
                if (options.oneofs)
                    object._roastCustom = "roastCustom";
            }
            if (message.aromatics != null && message.hasOwnProperty("aromatics")) {
                object.aromatics = message.aromatics;
                if (options.oneofs)
                    object._aromatics = "aromatics";
            }
            if (message.weight != null && message.hasOwnProperty("weight")) {
                if (typeof message.weight === "number")
                    object.weight = options.longs === String ? String(message.weight) : message.weight;
                else
                    object.weight = options.longs === String ? $util.Long.prototype.toString.call(message.weight) : options.longs === Number ? new $util.LongBits(message.weight.low >>> 0, message.weight.high >>> 0).toNumber(true) : message.weight;
                if (options.oneofs)
                    object._weight = "weight";
            }
            if (message.finished != null && message.hasOwnProperty("finished")) {
                object.finished = message.finished;
                if (options.oneofs)
                    object._finished = "finished";
            }
            if (message.cost != null && message.hasOwnProperty("cost")) {
                if (typeof message.cost === "number")
                    object.cost = options.longs === String ? String(message.cost) : message.cost;
                else
                    object.cost = options.longs === String ? $util.Long.prototype.toString.call(message.cost) : options.longs === Number ? new $util.LongBits(message.cost.low >>> 0, message.cost.high >>> 0).toNumber(true) : message.cost;
                if (options.oneofs)
                    object._cost = "cost";
            }
            if (message.attachments && message.attachments.length) {
                object.attachments = [];
                for (let j = 0; j < message.attachments.length; ++j)
                    object.attachments[j] = message.attachments[j];
            }
            if (message.cuppingPoints != null && message.hasOwnProperty("cuppingPoints")) {
                object.cuppingPoints = message.cuppingPoints;
                if (options.oneofs)
                    object._cuppingPoints = "cuppingPoints";
            }
            if (message.decaffeinated != null && message.hasOwnProperty("decaffeinated")) {
                object.decaffeinated = message.decaffeinated;
                if (options.oneofs)
                    object._decaffeinated = "decaffeinated";
            }
            if (message.url != null && message.hasOwnProperty("url")) {
                object.url = message.url;
                if (options.oneofs)
                    object._url = "url";
            }
            if (message.eanArticleNumber != null && message.hasOwnProperty("eanArticleNumber")) {
                object.eanArticleNumber = message.eanArticleNumber;
                if (options.oneofs)
                    object._eanArticleNumber = "eanArticleNumber";
            }
            if (message.rating != null && message.hasOwnProperty("rating")) {
                object.rating = message.rating;
                if (options.oneofs)
                    object._rating = "rating";
            }
            if (message.beanInformation && message.beanInformation.length) {
                object.beanInformation = [];
                for (let j = 0; j < message.beanInformation.length; ++j)
                    object.beanInformation[j] = $root.beanconqueror.BeanInformation.toObject(message.beanInformation[j], options);
            }
            if (message.beanRoastingType != null && message.hasOwnProperty("beanRoastingType")) {
                object.beanRoastingType = options.enums === String ? $root.beanconqueror.BeanRoastingType[message.beanRoastingType] === undefined ? message.beanRoastingType : $root.beanconqueror.BeanRoastingType[message.beanRoastingType] : message.beanRoastingType;
                if (options.oneofs)
                    object._beanRoastingType = "beanRoastingType";
            }
            if (message.beanRoastInformation != null && message.hasOwnProperty("beanRoastInformation")) {
                object.beanRoastInformation = $root.beanconqueror.BeanRoastInformation.toObject(message.beanRoastInformation, options);
                if (options.oneofs)
                    object._beanRoastInformation = "beanRoastInformation";
            }
            if (message.qrCode != null && message.hasOwnProperty("qrCode")) {
                object.qrCode = message.qrCode;
                if (options.oneofs)
                    object._qrCode = "qrCode";
            }
            if (message.favourite != null && message.hasOwnProperty("favourite")) {
                object.favourite = message.favourite;
                if (options.oneofs)
                    object._favourite = "favourite";
            }
            if (message.shared != null && message.hasOwnProperty("shared")) {
                object.shared = message.shared;
                if (options.oneofs)
                    object._shared = "shared";
            }
            if (message.cupping != null && message.hasOwnProperty("cupping")) {
                object.cupping = $root.beanconqueror.ICupping.toObject(message.cupping, options);
                if (options.oneofs)
                    object._cupping = "cupping";
            }
            if (message.cuppedFlavor != null && message.hasOwnProperty("cuppedFlavor")) {
                object.cuppedFlavor = $root.beanconqueror.IFlavor.toObject(message.cuppedFlavor, options);
                if (options.oneofs)
                    object._cuppedFlavor = "cuppedFlavor";
            }
            return object;
        };

        /**
         * Converts this BeanProto to JSON.
         * @function toJSON
         * @memberof beanconqueror.BeanProto
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeanProto.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BeanProto
         * @function getTypeUrl
         * @memberof beanconqueror.BeanProto
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BeanProto.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/beanconqueror.BeanProto";
        };

        return BeanProto;
    })();

    beanconqueror.Config = (function() {

        /**
         * Properties of a Config.
         * @memberof beanconqueror
         * @interface IConfig
         * @property {string|null} [uuid] Config uuid
         * @property {number|Long|null} [unixTimestamp] Config unixTimestamp
         */

        /**
         * Constructs a new Config.
         * @memberof beanconqueror
         * @classdesc Represents a Config.
         * @implements IConfig
         * @constructor
         * @param {beanconqueror.IConfig=} [properties] Properties to set
         */
        function Config(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Config uuid.
         * @member {string} uuid
         * @memberof beanconqueror.Config
         * @instance
         */
        Config.prototype.uuid = "";

        /**
         * Config unixTimestamp.
         * @member {number|Long} unixTimestamp
         * @memberof beanconqueror.Config
         * @instance
         */
        Config.prototype.unixTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Config instance using the specified properties.
         * @function create
         * @memberof beanconqueror.Config
         * @static
         * @param {beanconqueror.IConfig=} [properties] Properties to set
         * @returns {beanconqueror.Config} Config instance
         */
        Config.create = function create(properties) {
            return new Config(properties);
        };

        /**
         * Encodes the specified Config message. Does not implicitly {@link beanconqueror.Config.verify|verify} messages.
         * @function encode
         * @memberof beanconqueror.Config
         * @static
         * @param {beanconqueror.IConfig} message Config message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Config.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.unixTimestamp != null && Object.hasOwnProperty.call(message, "unixTimestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.unixTimestamp);
            return writer;
        };

        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link beanconqueror.Config.verify|verify} messages.
         * @function encodeDelimited
         * @memberof beanconqueror.Config
         * @static
         * @param {beanconqueror.IConfig} message Config message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Config.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @function decode
         * @memberof beanconqueror.Config
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {beanconqueror.Config} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Config.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.beanconqueror.Config();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2: {
                        message.unixTimestamp = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof beanconqueror.Config
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {beanconqueror.Config} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Config.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Config message.
         * @function verify
         * @memberof beanconqueror.Config
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Config.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.unixTimestamp != null && message.hasOwnProperty("unixTimestamp"))
                if (!$util.isInteger(message.unixTimestamp) && !(message.unixTimestamp && $util.isInteger(message.unixTimestamp.low) && $util.isInteger(message.unixTimestamp.high)))
                    return "unixTimestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof beanconqueror.Config
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {beanconqueror.Config} Config
         */
        Config.fromObject = function fromObject(object) {
            if (object instanceof $root.beanconqueror.Config)
                return object;
            let message = new $root.beanconqueror.Config();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.unixTimestamp != null)
                if ($util.Long)
                    (message.unixTimestamp = $util.Long.fromValue(object.unixTimestamp)).unsigned = true;
                else if (typeof object.unixTimestamp === "string")
                    message.unixTimestamp = parseInt(object.unixTimestamp, 10);
                else if (typeof object.unixTimestamp === "number")
                    message.unixTimestamp = object.unixTimestamp;
                else if (typeof object.unixTimestamp === "object")
                    message.unixTimestamp = new $util.LongBits(object.unixTimestamp.low >>> 0, object.unixTimestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @function toObject
         * @memberof beanconqueror.Config
         * @static
         * @param {beanconqueror.Config} message Config
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Config.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.uuid = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.unixTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unixTimestamp = options.longs === String ? "0" : 0;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.unixTimestamp != null && message.hasOwnProperty("unixTimestamp"))
                if (typeof message.unixTimestamp === "number")
                    object.unixTimestamp = options.longs === String ? String(message.unixTimestamp) : message.unixTimestamp;
                else
                    object.unixTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.unixTimestamp) : options.longs === Number ? new $util.LongBits(message.unixTimestamp.low >>> 0, message.unixTimestamp.high >>> 0).toNumber(true) : message.unixTimestamp;
            return object;
        };

        /**
         * Converts this Config to JSON.
         * @function toJSON
         * @memberof beanconqueror.Config
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Config.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Config
         * @function getTypeUrl
         * @memberof beanconqueror.Config
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Config.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/beanconqueror.Config";
        };

        return Config;
    })();

    beanconqueror.BeanInformation = (function() {

        /**
         * Properties of a BeanInformation.
         * @memberof beanconqueror
         * @interface IBeanInformation
         * @property {string|null} [country] BeanInformation country
         * @property {string|null} [region] BeanInformation region
         * @property {string|null} [farm] BeanInformation farm
         * @property {string|null} [farmer] BeanInformation farmer
         * @property {string|null} [elevation] BeanInformation elevation
         * @property {string|null} [harvestTime] BeanInformation harvestTime
         * @property {string|null} [variety] BeanInformation variety
         * @property {string|null} [processing] BeanInformation processing
         * @property {string|null} [certification] BeanInformation certification
         * @property {number|null} [percentage] BeanInformation percentage
         * @property {number|null} [purchasingPrice] BeanInformation purchasingPrice
         * @property {number|null} [fobPrice] BeanInformation fobPrice
         */

        /**
         * Constructs a new BeanInformation.
         * @memberof beanconqueror
         * @classdesc Represents a BeanInformation.
         * @implements IBeanInformation
         * @constructor
         * @param {beanconqueror.IBeanInformation=} [properties] Properties to set
         */
        function BeanInformation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BeanInformation country.
         * @member {string|null|undefined} country
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.country = null;

        /**
         * BeanInformation region.
         * @member {string|null|undefined} region
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.region = null;

        /**
         * BeanInformation farm.
         * @member {string|null|undefined} farm
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.farm = null;

        /**
         * BeanInformation farmer.
         * @member {string|null|undefined} farmer
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.farmer = null;

        /**
         * BeanInformation elevation.
         * @member {string|null|undefined} elevation
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.elevation = null;

        /**
         * BeanInformation harvestTime.
         * @member {string|null|undefined} harvestTime
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.harvestTime = null;

        /**
         * BeanInformation variety.
         * @member {string|null|undefined} variety
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.variety = null;

        /**
         * BeanInformation processing.
         * @member {string|null|undefined} processing
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.processing = null;

        /**
         * BeanInformation certification.
         * @member {string|null|undefined} certification
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.certification = null;

        /**
         * BeanInformation percentage.
         * @member {number|null|undefined} percentage
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.percentage = null;

        /**
         * BeanInformation purchasingPrice.
         * @member {number|null|undefined} purchasingPrice
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.purchasingPrice = null;

        /**
         * BeanInformation fobPrice.
         * @member {number|null|undefined} fobPrice
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        BeanInformation.prototype.fobPrice = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * BeanInformation _country.
         * @member {"country"|undefined} _country
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_country", {
            get: $util.oneOfGetter($oneOfFields = ["country"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _region.
         * @member {"region"|undefined} _region
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_region", {
            get: $util.oneOfGetter($oneOfFields = ["region"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _farm.
         * @member {"farm"|undefined} _farm
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_farm", {
            get: $util.oneOfGetter($oneOfFields = ["farm"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _farmer.
         * @member {"farmer"|undefined} _farmer
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_farmer", {
            get: $util.oneOfGetter($oneOfFields = ["farmer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _elevation.
         * @member {"elevation"|undefined} _elevation
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_elevation", {
            get: $util.oneOfGetter($oneOfFields = ["elevation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _harvestTime.
         * @member {"harvestTime"|undefined} _harvestTime
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_harvestTime", {
            get: $util.oneOfGetter($oneOfFields = ["harvestTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _variety.
         * @member {"variety"|undefined} _variety
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_variety", {
            get: $util.oneOfGetter($oneOfFields = ["variety"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _processing.
         * @member {"processing"|undefined} _processing
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_processing", {
            get: $util.oneOfGetter($oneOfFields = ["processing"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _certification.
         * @member {"certification"|undefined} _certification
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_certification", {
            get: $util.oneOfGetter($oneOfFields = ["certification"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _percentage.
         * @member {"percentage"|undefined} _percentage
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_percentage", {
            get: $util.oneOfGetter($oneOfFields = ["percentage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _purchasingPrice.
         * @member {"purchasingPrice"|undefined} _purchasingPrice
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_purchasingPrice", {
            get: $util.oneOfGetter($oneOfFields = ["purchasingPrice"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanInformation _fobPrice.
         * @member {"fobPrice"|undefined} _fobPrice
         * @memberof beanconqueror.BeanInformation
         * @instance
         */
        Object.defineProperty(BeanInformation.prototype, "_fobPrice", {
            get: $util.oneOfGetter($oneOfFields = ["fobPrice"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BeanInformation instance using the specified properties.
         * @function create
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {beanconqueror.IBeanInformation=} [properties] Properties to set
         * @returns {beanconqueror.BeanInformation} BeanInformation instance
         */
        BeanInformation.create = function create(properties) {
            return new BeanInformation(properties);
        };

        /**
         * Encodes the specified BeanInformation message. Does not implicitly {@link beanconqueror.BeanInformation.verify|verify} messages.
         * @function encode
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {beanconqueror.IBeanInformation} message BeanInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeanInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.country);
            if (message.region != null && Object.hasOwnProperty.call(message, "region"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.region);
            if (message.farm != null && Object.hasOwnProperty.call(message, "farm"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.farm);
            if (message.farmer != null && Object.hasOwnProperty.call(message, "farmer"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.farmer);
            if (message.elevation != null && Object.hasOwnProperty.call(message, "elevation"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.elevation);
            if (message.harvestTime != null && Object.hasOwnProperty.call(message, "harvestTime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.harvestTime);
            if (message.variety != null && Object.hasOwnProperty.call(message, "variety"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.variety);
            if (message.processing != null && Object.hasOwnProperty.call(message, "processing"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.processing);
            if (message.certification != null && Object.hasOwnProperty.call(message, "certification"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.certification);
            if (message.percentage != null && Object.hasOwnProperty.call(message, "percentage"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.percentage);
            if (message.purchasingPrice != null && Object.hasOwnProperty.call(message, "purchasingPrice"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.purchasingPrice);
            if (message.fobPrice != null && Object.hasOwnProperty.call(message, "fobPrice"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.fobPrice);
            return writer;
        };

        /**
         * Encodes the specified BeanInformation message, length delimited. Does not implicitly {@link beanconqueror.BeanInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {beanconqueror.IBeanInformation} message BeanInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeanInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeanInformation message from the specified reader or buffer.
         * @function decode
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {beanconqueror.BeanInformation} BeanInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeanInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.beanconqueror.BeanInformation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.country = reader.string();
                        break;
                    }
                case 2: {
                        message.region = reader.string();
                        break;
                    }
                case 3: {
                        message.farm = reader.string();
                        break;
                    }
                case 4: {
                        message.farmer = reader.string();
                        break;
                    }
                case 5: {
                        message.elevation = reader.string();
                        break;
                    }
                case 6: {
                        message.harvestTime = reader.string();
                        break;
                    }
                case 7: {
                        message.variety = reader.string();
                        break;
                    }
                case 8: {
                        message.processing = reader.string();
                        break;
                    }
                case 9: {
                        message.certification = reader.string();
                        break;
                    }
                case 10: {
                        message.percentage = reader.uint32();
                        break;
                    }
                case 11: {
                        message.purchasingPrice = reader.uint32();
                        break;
                    }
                case 12: {
                        message.fobPrice = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BeanInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {beanconqueror.BeanInformation} BeanInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeanInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeanInformation message.
         * @function verify
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeanInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.country != null && message.hasOwnProperty("country")) {
                properties._country = 1;
                if (!$util.isString(message.country))
                    return "country: string expected";
            }
            if (message.region != null && message.hasOwnProperty("region")) {
                properties._region = 1;
                if (!$util.isString(message.region))
                    return "region: string expected";
            }
            if (message.farm != null && message.hasOwnProperty("farm")) {
                properties._farm = 1;
                if (!$util.isString(message.farm))
                    return "farm: string expected";
            }
            if (message.farmer != null && message.hasOwnProperty("farmer")) {
                properties._farmer = 1;
                if (!$util.isString(message.farmer))
                    return "farmer: string expected";
            }
            if (message.elevation != null && message.hasOwnProperty("elevation")) {
                properties._elevation = 1;
                if (!$util.isString(message.elevation))
                    return "elevation: string expected";
            }
            if (message.harvestTime != null && message.hasOwnProperty("harvestTime")) {
                properties._harvestTime = 1;
                if (!$util.isString(message.harvestTime))
                    return "harvestTime: string expected";
            }
            if (message.variety != null && message.hasOwnProperty("variety")) {
                properties._variety = 1;
                if (!$util.isString(message.variety))
                    return "variety: string expected";
            }
            if (message.processing != null && message.hasOwnProperty("processing")) {
                properties._processing = 1;
                if (!$util.isString(message.processing))
                    return "processing: string expected";
            }
            if (message.certification != null && message.hasOwnProperty("certification")) {
                properties._certification = 1;
                if (!$util.isString(message.certification))
                    return "certification: string expected";
            }
            if (message.percentage != null && message.hasOwnProperty("percentage")) {
                properties._percentage = 1;
                if (!$util.isInteger(message.percentage))
                    return "percentage: integer expected";
            }
            if (message.purchasingPrice != null && message.hasOwnProperty("purchasingPrice")) {
                properties._purchasingPrice = 1;
                if (!$util.isInteger(message.purchasingPrice))
                    return "purchasingPrice: integer expected";
            }
            if (message.fobPrice != null && message.hasOwnProperty("fobPrice")) {
                properties._fobPrice = 1;
                if (!$util.isInteger(message.fobPrice))
                    return "fobPrice: integer expected";
            }
            return null;
        };

        /**
         * Creates a BeanInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {beanconqueror.BeanInformation} BeanInformation
         */
        BeanInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.beanconqueror.BeanInformation)
                return object;
            let message = new $root.beanconqueror.BeanInformation();
            if (object.country != null)
                message.country = String(object.country);
            if (object.region != null)
                message.region = String(object.region);
            if (object.farm != null)
                message.farm = String(object.farm);
            if (object.farmer != null)
                message.farmer = String(object.farmer);
            if (object.elevation != null)
                message.elevation = String(object.elevation);
            if (object.harvestTime != null)
                message.harvestTime = String(object.harvestTime);
            if (object.variety != null)
                message.variety = String(object.variety);
            if (object.processing != null)
                message.processing = String(object.processing);
            if (object.certification != null)
                message.certification = String(object.certification);
            if (object.percentage != null)
                message.percentage = object.percentage >>> 0;
            if (object.purchasingPrice != null)
                message.purchasingPrice = object.purchasingPrice >>> 0;
            if (object.fobPrice != null)
                message.fobPrice = object.fobPrice >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BeanInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {beanconqueror.BeanInformation} message BeanInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeanInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.country != null && message.hasOwnProperty("country")) {
                object.country = message.country;
                if (options.oneofs)
                    object._country = "country";
            }
            if (message.region != null && message.hasOwnProperty("region")) {
                object.region = message.region;
                if (options.oneofs)
                    object._region = "region";
            }
            if (message.farm != null && message.hasOwnProperty("farm")) {
                object.farm = message.farm;
                if (options.oneofs)
                    object._farm = "farm";
            }
            if (message.farmer != null && message.hasOwnProperty("farmer")) {
                object.farmer = message.farmer;
                if (options.oneofs)
                    object._farmer = "farmer";
            }
            if (message.elevation != null && message.hasOwnProperty("elevation")) {
                object.elevation = message.elevation;
                if (options.oneofs)
                    object._elevation = "elevation";
            }
            if (message.harvestTime != null && message.hasOwnProperty("harvestTime")) {
                object.harvestTime = message.harvestTime;
                if (options.oneofs)
                    object._harvestTime = "harvestTime";
            }
            if (message.variety != null && message.hasOwnProperty("variety")) {
                object.variety = message.variety;
                if (options.oneofs)
                    object._variety = "variety";
            }
            if (message.processing != null && message.hasOwnProperty("processing")) {
                object.processing = message.processing;
                if (options.oneofs)
                    object._processing = "processing";
            }
            if (message.certification != null && message.hasOwnProperty("certification")) {
                object.certification = message.certification;
                if (options.oneofs)
                    object._certification = "certification";
            }
            if (message.percentage != null && message.hasOwnProperty("percentage")) {
                object.percentage = message.percentage;
                if (options.oneofs)
                    object._percentage = "percentage";
            }
            if (message.purchasingPrice != null && message.hasOwnProperty("purchasingPrice")) {
                object.purchasingPrice = message.purchasingPrice;
                if (options.oneofs)
                    object._purchasingPrice = "purchasingPrice";
            }
            if (message.fobPrice != null && message.hasOwnProperty("fobPrice")) {
                object.fobPrice = message.fobPrice;
                if (options.oneofs)
                    object._fobPrice = "fobPrice";
            }
            return object;
        };

        /**
         * Converts this BeanInformation to JSON.
         * @function toJSON
         * @memberof beanconqueror.BeanInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeanInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BeanInformation
         * @function getTypeUrl
         * @memberof beanconqueror.BeanInformation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BeanInformation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/beanconqueror.BeanInformation";
        };

        return BeanInformation;
    })();

    beanconqueror.BeanRoastInformation = (function() {

        /**
         * Properties of a BeanRoastInformation.
         * @memberof beanconqueror
         * @interface IBeanRoastInformation
         * @property {number|null} [dropTemperature] BeanRoastInformation dropTemperature
         * @property {number|Long|null} [roastLength] BeanRoastInformation roastLength
         * @property {string|null} [roasterMachine] BeanRoastInformation roasterMachine
         * @property {number|Long|null} [greenBeanWeight] BeanRoastInformation greenBeanWeight
         * @property {number|null} [outsideTemperature] BeanRoastInformation outsideTemperature
         * @property {number|null} [humidity] BeanRoastInformation humidity
         * @property {string|null} [beanUuid] BeanRoastInformation beanUuid
         * @property {number|null} [firstCrackMinute] BeanRoastInformation firstCrackMinute
         * @property {number|null} [firstCrackTemperature] BeanRoastInformation firstCrackTemperature
         * @property {number|null} [secondCrackMinute] BeanRoastInformation secondCrackMinute
         * @property {number|null} [secondCrackTemperature] BeanRoastInformation secondCrackTemperature
         */

        /**
         * Constructs a new BeanRoastInformation.
         * @memberof beanconqueror
         * @classdesc Represents a BeanRoastInformation.
         * @implements IBeanRoastInformation
         * @constructor
         * @param {beanconqueror.IBeanRoastInformation=} [properties] Properties to set
         */
        function BeanRoastInformation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BeanRoastInformation dropTemperature.
         * @member {number|null|undefined} dropTemperature
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.dropTemperature = null;

        /**
         * BeanRoastInformation roastLength.
         * @member {number|Long|null|undefined} roastLength
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.roastLength = null;

        /**
         * BeanRoastInformation roasterMachine.
         * @member {string|null|undefined} roasterMachine
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.roasterMachine = null;

        /**
         * BeanRoastInformation greenBeanWeight.
         * @member {number|Long|null|undefined} greenBeanWeight
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.greenBeanWeight = null;

        /**
         * BeanRoastInformation outsideTemperature.
         * @member {number|null|undefined} outsideTemperature
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.outsideTemperature = null;

        /**
         * BeanRoastInformation humidity.
         * @member {number|null|undefined} humidity
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.humidity = null;

        /**
         * BeanRoastInformation beanUuid.
         * @member {string|null|undefined} beanUuid
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.beanUuid = null;

        /**
         * BeanRoastInformation firstCrackMinute.
         * @member {number|null|undefined} firstCrackMinute
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.firstCrackMinute = null;

        /**
         * BeanRoastInformation firstCrackTemperature.
         * @member {number|null|undefined} firstCrackTemperature
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.firstCrackTemperature = null;

        /**
         * BeanRoastInformation secondCrackMinute.
         * @member {number|null|undefined} secondCrackMinute
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.secondCrackMinute = null;

        /**
         * BeanRoastInformation secondCrackTemperature.
         * @member {number|null|undefined} secondCrackTemperature
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        BeanRoastInformation.prototype.secondCrackTemperature = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * BeanRoastInformation _dropTemperature.
         * @member {"dropTemperature"|undefined} _dropTemperature
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_dropTemperature", {
            get: $util.oneOfGetter($oneOfFields = ["dropTemperature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _roastLength.
         * @member {"roastLength"|undefined} _roastLength
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_roastLength", {
            get: $util.oneOfGetter($oneOfFields = ["roastLength"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _roasterMachine.
         * @member {"roasterMachine"|undefined} _roasterMachine
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_roasterMachine", {
            get: $util.oneOfGetter($oneOfFields = ["roasterMachine"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _greenBeanWeight.
         * @member {"greenBeanWeight"|undefined} _greenBeanWeight
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_greenBeanWeight", {
            get: $util.oneOfGetter($oneOfFields = ["greenBeanWeight"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _outsideTemperature.
         * @member {"outsideTemperature"|undefined} _outsideTemperature
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_outsideTemperature", {
            get: $util.oneOfGetter($oneOfFields = ["outsideTemperature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _humidity.
         * @member {"humidity"|undefined} _humidity
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_humidity", {
            get: $util.oneOfGetter($oneOfFields = ["humidity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _beanUuid.
         * @member {"beanUuid"|undefined} _beanUuid
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_beanUuid", {
            get: $util.oneOfGetter($oneOfFields = ["beanUuid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _firstCrackMinute.
         * @member {"firstCrackMinute"|undefined} _firstCrackMinute
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_firstCrackMinute", {
            get: $util.oneOfGetter($oneOfFields = ["firstCrackMinute"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _firstCrackTemperature.
         * @member {"firstCrackTemperature"|undefined} _firstCrackTemperature
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_firstCrackTemperature", {
            get: $util.oneOfGetter($oneOfFields = ["firstCrackTemperature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _secondCrackMinute.
         * @member {"secondCrackMinute"|undefined} _secondCrackMinute
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_secondCrackMinute", {
            get: $util.oneOfGetter($oneOfFields = ["secondCrackMinute"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * BeanRoastInformation _secondCrackTemperature.
         * @member {"secondCrackTemperature"|undefined} _secondCrackTemperature
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         */
        Object.defineProperty(BeanRoastInformation.prototype, "_secondCrackTemperature", {
            get: $util.oneOfGetter($oneOfFields = ["secondCrackTemperature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BeanRoastInformation instance using the specified properties.
         * @function create
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {beanconqueror.IBeanRoastInformation=} [properties] Properties to set
         * @returns {beanconqueror.BeanRoastInformation} BeanRoastInformation instance
         */
        BeanRoastInformation.create = function create(properties) {
            return new BeanRoastInformation(properties);
        };

        /**
         * Encodes the specified BeanRoastInformation message. Does not implicitly {@link beanconqueror.BeanRoastInformation.verify|verify} messages.
         * @function encode
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {beanconqueror.IBeanRoastInformation} message BeanRoastInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeanRoastInformation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dropTemperature != null && Object.hasOwnProperty.call(message, "dropTemperature"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.dropTemperature);
            if (message.roastLength != null && Object.hasOwnProperty.call(message, "roastLength"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.roastLength);
            if (message.roasterMachine != null && Object.hasOwnProperty.call(message, "roasterMachine"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.roasterMachine);
            if (message.greenBeanWeight != null && Object.hasOwnProperty.call(message, "greenBeanWeight"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.greenBeanWeight);
            if (message.outsideTemperature != null && Object.hasOwnProperty.call(message, "outsideTemperature"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.outsideTemperature);
            if (message.humidity != null && Object.hasOwnProperty.call(message, "humidity"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.humidity);
            if (message.beanUuid != null && Object.hasOwnProperty.call(message, "beanUuid"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.beanUuid);
            if (message.firstCrackMinute != null && Object.hasOwnProperty.call(message, "firstCrackMinute"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.firstCrackMinute);
            if (message.firstCrackTemperature != null && Object.hasOwnProperty.call(message, "firstCrackTemperature"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.firstCrackTemperature);
            if (message.secondCrackMinute != null && Object.hasOwnProperty.call(message, "secondCrackMinute"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.secondCrackMinute);
            if (message.secondCrackTemperature != null && Object.hasOwnProperty.call(message, "secondCrackTemperature"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.secondCrackTemperature);
            return writer;
        };

        /**
         * Encodes the specified BeanRoastInformation message, length delimited. Does not implicitly {@link beanconqueror.BeanRoastInformation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {beanconqueror.IBeanRoastInformation} message BeanRoastInformation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeanRoastInformation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeanRoastInformation message from the specified reader or buffer.
         * @function decode
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {beanconqueror.BeanRoastInformation} BeanRoastInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeanRoastInformation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.beanconqueror.BeanRoastInformation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dropTemperature = reader.uint32();
                        break;
                    }
                case 2: {
                        message.roastLength = reader.uint64();
                        break;
                    }
                case 3: {
                        message.roasterMachine = reader.string();
                        break;
                    }
                case 4: {
                        message.greenBeanWeight = reader.uint64();
                        break;
                    }
                case 5: {
                        message.outsideTemperature = reader.uint32();
                        break;
                    }
                case 6: {
                        message.humidity = reader.uint32();
                        break;
                    }
                case 7: {
                        message.beanUuid = reader.string();
                        break;
                    }
                case 8: {
                        message.firstCrackMinute = reader.uint32();
                        break;
                    }
                case 9: {
                        message.firstCrackTemperature = reader.uint32();
                        break;
                    }
                case 10: {
                        message.secondCrackMinute = reader.uint32();
                        break;
                    }
                case 11: {
                        message.secondCrackTemperature = reader.uint32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BeanRoastInformation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {beanconqueror.BeanRoastInformation} BeanRoastInformation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeanRoastInformation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeanRoastInformation message.
         * @function verify
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeanRoastInformation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.dropTemperature != null && message.hasOwnProperty("dropTemperature")) {
                properties._dropTemperature = 1;
                if (!$util.isInteger(message.dropTemperature))
                    return "dropTemperature: integer expected";
            }
            if (message.roastLength != null && message.hasOwnProperty("roastLength")) {
                properties._roastLength = 1;
                if (!$util.isInteger(message.roastLength) && !(message.roastLength && $util.isInteger(message.roastLength.low) && $util.isInteger(message.roastLength.high)))
                    return "roastLength: integer|Long expected";
            }
            if (message.roasterMachine != null && message.hasOwnProperty("roasterMachine")) {
                properties._roasterMachine = 1;
                if (!$util.isString(message.roasterMachine))
                    return "roasterMachine: string expected";
            }
            if (message.greenBeanWeight != null && message.hasOwnProperty("greenBeanWeight")) {
                properties._greenBeanWeight = 1;
                if (!$util.isInteger(message.greenBeanWeight) && !(message.greenBeanWeight && $util.isInteger(message.greenBeanWeight.low) && $util.isInteger(message.greenBeanWeight.high)))
                    return "greenBeanWeight: integer|Long expected";
            }
            if (message.outsideTemperature != null && message.hasOwnProperty("outsideTemperature")) {
                properties._outsideTemperature = 1;
                if (!$util.isInteger(message.outsideTemperature))
                    return "outsideTemperature: integer expected";
            }
            if (message.humidity != null && message.hasOwnProperty("humidity")) {
                properties._humidity = 1;
                if (!$util.isInteger(message.humidity))
                    return "humidity: integer expected";
            }
            if (message.beanUuid != null && message.hasOwnProperty("beanUuid")) {
                properties._beanUuid = 1;
                if (!$util.isString(message.beanUuid))
                    return "beanUuid: string expected";
            }
            if (message.firstCrackMinute != null && message.hasOwnProperty("firstCrackMinute")) {
                properties._firstCrackMinute = 1;
                if (!$util.isInteger(message.firstCrackMinute))
                    return "firstCrackMinute: integer expected";
            }
            if (message.firstCrackTemperature != null && message.hasOwnProperty("firstCrackTemperature")) {
                properties._firstCrackTemperature = 1;
                if (!$util.isInteger(message.firstCrackTemperature))
                    return "firstCrackTemperature: integer expected";
            }
            if (message.secondCrackMinute != null && message.hasOwnProperty("secondCrackMinute")) {
                properties._secondCrackMinute = 1;
                if (!$util.isInteger(message.secondCrackMinute))
                    return "secondCrackMinute: integer expected";
            }
            if (message.secondCrackTemperature != null && message.hasOwnProperty("secondCrackTemperature")) {
                properties._secondCrackTemperature = 1;
                if (!$util.isInteger(message.secondCrackTemperature))
                    return "secondCrackTemperature: integer expected";
            }
            return null;
        };

        /**
         * Creates a BeanRoastInformation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {beanconqueror.BeanRoastInformation} BeanRoastInformation
         */
        BeanRoastInformation.fromObject = function fromObject(object) {
            if (object instanceof $root.beanconqueror.BeanRoastInformation)
                return object;
            let message = new $root.beanconqueror.BeanRoastInformation();
            if (object.dropTemperature != null)
                message.dropTemperature = object.dropTemperature >>> 0;
            if (object.roastLength != null)
                if ($util.Long)
                    (message.roastLength = $util.Long.fromValue(object.roastLength)).unsigned = true;
                else if (typeof object.roastLength === "string")
                    message.roastLength = parseInt(object.roastLength, 10);
                else if (typeof object.roastLength === "number")
                    message.roastLength = object.roastLength;
                else if (typeof object.roastLength === "object")
                    message.roastLength = new $util.LongBits(object.roastLength.low >>> 0, object.roastLength.high >>> 0).toNumber(true);
            if (object.roasterMachine != null)
                message.roasterMachine = String(object.roasterMachine);
            if (object.greenBeanWeight != null)
                if ($util.Long)
                    (message.greenBeanWeight = $util.Long.fromValue(object.greenBeanWeight)).unsigned = true;
                else if (typeof object.greenBeanWeight === "string")
                    message.greenBeanWeight = parseInt(object.greenBeanWeight, 10);
                else if (typeof object.greenBeanWeight === "number")
                    message.greenBeanWeight = object.greenBeanWeight;
                else if (typeof object.greenBeanWeight === "object")
                    message.greenBeanWeight = new $util.LongBits(object.greenBeanWeight.low >>> 0, object.greenBeanWeight.high >>> 0).toNumber(true);
            if (object.outsideTemperature != null)
                message.outsideTemperature = object.outsideTemperature >>> 0;
            if (object.humidity != null)
                message.humidity = object.humidity >>> 0;
            if (object.beanUuid != null)
                message.beanUuid = String(object.beanUuid);
            if (object.firstCrackMinute != null)
                message.firstCrackMinute = object.firstCrackMinute >>> 0;
            if (object.firstCrackTemperature != null)
                message.firstCrackTemperature = object.firstCrackTemperature >>> 0;
            if (object.secondCrackMinute != null)
                message.secondCrackMinute = object.secondCrackMinute >>> 0;
            if (object.secondCrackTemperature != null)
                message.secondCrackTemperature = object.secondCrackTemperature >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BeanRoastInformation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {beanconqueror.BeanRoastInformation} message BeanRoastInformation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeanRoastInformation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.dropTemperature != null && message.hasOwnProperty("dropTemperature")) {
                object.dropTemperature = message.dropTemperature;
                if (options.oneofs)
                    object._dropTemperature = "dropTemperature";
            }
            if (message.roastLength != null && message.hasOwnProperty("roastLength")) {
                if (typeof message.roastLength === "number")
                    object.roastLength = options.longs === String ? String(message.roastLength) : message.roastLength;
                else
                    object.roastLength = options.longs === String ? $util.Long.prototype.toString.call(message.roastLength) : options.longs === Number ? new $util.LongBits(message.roastLength.low >>> 0, message.roastLength.high >>> 0).toNumber(true) : message.roastLength;
                if (options.oneofs)
                    object._roastLength = "roastLength";
            }
            if (message.roasterMachine != null && message.hasOwnProperty("roasterMachine")) {
                object.roasterMachine = message.roasterMachine;
                if (options.oneofs)
                    object._roasterMachine = "roasterMachine";
            }
            if (message.greenBeanWeight != null && message.hasOwnProperty("greenBeanWeight")) {
                if (typeof message.greenBeanWeight === "number")
                    object.greenBeanWeight = options.longs === String ? String(message.greenBeanWeight) : message.greenBeanWeight;
                else
                    object.greenBeanWeight = options.longs === String ? $util.Long.prototype.toString.call(message.greenBeanWeight) : options.longs === Number ? new $util.LongBits(message.greenBeanWeight.low >>> 0, message.greenBeanWeight.high >>> 0).toNumber(true) : message.greenBeanWeight;
                if (options.oneofs)
                    object._greenBeanWeight = "greenBeanWeight";
            }
            if (message.outsideTemperature != null && message.hasOwnProperty("outsideTemperature")) {
                object.outsideTemperature = message.outsideTemperature;
                if (options.oneofs)
                    object._outsideTemperature = "outsideTemperature";
            }
            if (message.humidity != null && message.hasOwnProperty("humidity")) {
                object.humidity = message.humidity;
                if (options.oneofs)
                    object._humidity = "humidity";
            }
            if (message.beanUuid != null && message.hasOwnProperty("beanUuid")) {
                object.beanUuid = message.beanUuid;
                if (options.oneofs)
                    object._beanUuid = "beanUuid";
            }
            if (message.firstCrackMinute != null && message.hasOwnProperty("firstCrackMinute")) {
                object.firstCrackMinute = message.firstCrackMinute;
                if (options.oneofs)
                    object._firstCrackMinute = "firstCrackMinute";
            }
            if (message.firstCrackTemperature != null && message.hasOwnProperty("firstCrackTemperature")) {
                object.firstCrackTemperature = message.firstCrackTemperature;
                if (options.oneofs)
                    object._firstCrackTemperature = "firstCrackTemperature";
            }
            if (message.secondCrackMinute != null && message.hasOwnProperty("secondCrackMinute")) {
                object.secondCrackMinute = message.secondCrackMinute;
                if (options.oneofs)
                    object._secondCrackMinute = "secondCrackMinute";
            }
            if (message.secondCrackTemperature != null && message.hasOwnProperty("secondCrackTemperature")) {
                object.secondCrackTemperature = message.secondCrackTemperature;
                if (options.oneofs)
                    object._secondCrackTemperature = "secondCrackTemperature";
            }
            return object;
        };

        /**
         * Converts this BeanRoastInformation to JSON.
         * @function toJSON
         * @memberof beanconqueror.BeanRoastInformation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeanRoastInformation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BeanRoastInformation
         * @function getTypeUrl
         * @memberof beanconqueror.BeanRoastInformation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BeanRoastInformation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/beanconqueror.BeanRoastInformation";
        };

        return BeanRoastInformation;
    })();

    beanconqueror.ICupping = (function() {

        /**
         * Properties of a ICupping.
         * @memberof beanconqueror
         * @interface IICupping
         * @property {number|Long|null} [dryFragrance] ICupping dryFragrance
         * @property {number|Long|null} [wetAroma] ICupping wetAroma
         * @property {number|Long|null} [brightness] ICupping brightness
         * @property {number|Long|null} [flavor] ICupping flavor
         * @property {number|Long|null} [body] ICupping body
         * @property {number|Long|null} [finish] ICupping finish
         * @property {number|Long|null} [sweetness] ICupping sweetness
         * @property {number|Long|null} [cleanCup] ICupping cleanCup
         * @property {number|Long|null} [complexity] ICupping complexity
         * @property {number|Long|null} [uniformity] ICupping uniformity
         * @property {number|Long|null} [cuppersCorrection] ICupping cuppersCorrection
         */

        /**
         * Constructs a new ICupping.
         * @memberof beanconqueror
         * @classdesc Represents a ICupping.
         * @implements IICupping
         * @constructor
         * @param {beanconqueror.IICupping=} [properties] Properties to set
         */
        function ICupping(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ICupping dryFragrance.
         * @member {number|Long|null|undefined} dryFragrance
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.dryFragrance = null;

        /**
         * ICupping wetAroma.
         * @member {number|Long|null|undefined} wetAroma
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.wetAroma = null;

        /**
         * ICupping brightness.
         * @member {number|Long|null|undefined} brightness
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.brightness = null;

        /**
         * ICupping flavor.
         * @member {number|Long|null|undefined} flavor
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.flavor = null;

        /**
         * ICupping body.
         * @member {number|Long|null|undefined} body
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.body = null;

        /**
         * ICupping finish.
         * @member {number|Long|null|undefined} finish
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.finish = null;

        /**
         * ICupping sweetness.
         * @member {number|Long|null|undefined} sweetness
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.sweetness = null;

        /**
         * ICupping cleanCup.
         * @member {number|Long|null|undefined} cleanCup
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.cleanCup = null;

        /**
         * ICupping complexity.
         * @member {number|Long|null|undefined} complexity
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.complexity = null;

        /**
         * ICupping uniformity.
         * @member {number|Long|null|undefined} uniformity
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.uniformity = null;

        /**
         * ICupping cuppersCorrection.
         * @member {number|Long|null|undefined} cuppersCorrection
         * @memberof beanconqueror.ICupping
         * @instance
         */
        ICupping.prototype.cuppersCorrection = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ICupping _dryFragrance.
         * @member {"dryFragrance"|undefined} _dryFragrance
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_dryFragrance", {
            get: $util.oneOfGetter($oneOfFields = ["dryFragrance"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _wetAroma.
         * @member {"wetAroma"|undefined} _wetAroma
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_wetAroma", {
            get: $util.oneOfGetter($oneOfFields = ["wetAroma"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _brightness.
         * @member {"brightness"|undefined} _brightness
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_brightness", {
            get: $util.oneOfGetter($oneOfFields = ["brightness"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _flavor.
         * @member {"flavor"|undefined} _flavor
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_flavor", {
            get: $util.oneOfGetter($oneOfFields = ["flavor"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _body.
         * @member {"body"|undefined} _body
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_body", {
            get: $util.oneOfGetter($oneOfFields = ["body"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _finish.
         * @member {"finish"|undefined} _finish
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_finish", {
            get: $util.oneOfGetter($oneOfFields = ["finish"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _sweetness.
         * @member {"sweetness"|undefined} _sweetness
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_sweetness", {
            get: $util.oneOfGetter($oneOfFields = ["sweetness"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _cleanCup.
         * @member {"cleanCup"|undefined} _cleanCup
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_cleanCup", {
            get: $util.oneOfGetter($oneOfFields = ["cleanCup"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _complexity.
         * @member {"complexity"|undefined} _complexity
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_complexity", {
            get: $util.oneOfGetter($oneOfFields = ["complexity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _uniformity.
         * @member {"uniformity"|undefined} _uniformity
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_uniformity", {
            get: $util.oneOfGetter($oneOfFields = ["uniformity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * ICupping _cuppersCorrection.
         * @member {"cuppersCorrection"|undefined} _cuppersCorrection
         * @memberof beanconqueror.ICupping
         * @instance
         */
        Object.defineProperty(ICupping.prototype, "_cuppersCorrection", {
            get: $util.oneOfGetter($oneOfFields = ["cuppersCorrection"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ICupping instance using the specified properties.
         * @function create
         * @memberof beanconqueror.ICupping
         * @static
         * @param {beanconqueror.IICupping=} [properties] Properties to set
         * @returns {beanconqueror.ICupping} ICupping instance
         */
        ICupping.create = function create(properties) {
            return new ICupping(properties);
        };

        /**
         * Encodes the specified ICupping message. Does not implicitly {@link beanconqueror.ICupping.verify|verify} messages.
         * @function encode
         * @memberof beanconqueror.ICupping
         * @static
         * @param {beanconqueror.IICupping} message ICupping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ICupping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dryFragrance != null && Object.hasOwnProperty.call(message, "dryFragrance"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.dryFragrance);
            if (message.wetAroma != null && Object.hasOwnProperty.call(message, "wetAroma"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.wetAroma);
            if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.brightness);
            if (message.flavor != null && Object.hasOwnProperty.call(message, "flavor"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.flavor);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.body);
            if (message.finish != null && Object.hasOwnProperty.call(message, "finish"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.finish);
            if (message.sweetness != null && Object.hasOwnProperty.call(message, "sweetness"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.sweetness);
            if (message.cleanCup != null && Object.hasOwnProperty.call(message, "cleanCup"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.cleanCup);
            if (message.complexity != null && Object.hasOwnProperty.call(message, "complexity"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.complexity);
            if (message.uniformity != null && Object.hasOwnProperty.call(message, "uniformity"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.uniformity);
            if (message.cuppersCorrection != null && Object.hasOwnProperty.call(message, "cuppersCorrection"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.cuppersCorrection);
            return writer;
        };

        /**
         * Encodes the specified ICupping message, length delimited. Does not implicitly {@link beanconqueror.ICupping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof beanconqueror.ICupping
         * @static
         * @param {beanconqueror.IICupping} message ICupping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ICupping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ICupping message from the specified reader or buffer.
         * @function decode
         * @memberof beanconqueror.ICupping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {beanconqueror.ICupping} ICupping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ICupping.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.beanconqueror.ICupping();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dryFragrance = reader.uint64();
                        break;
                    }
                case 2: {
                        message.wetAroma = reader.uint64();
                        break;
                    }
                case 3: {
                        message.brightness = reader.uint64();
                        break;
                    }
                case 4: {
                        message.flavor = reader.uint64();
                        break;
                    }
                case 5: {
                        message.body = reader.uint64();
                        break;
                    }
                case 6: {
                        message.finish = reader.uint64();
                        break;
                    }
                case 7: {
                        message.sweetness = reader.uint64();
                        break;
                    }
                case 8: {
                        message.cleanCup = reader.uint64();
                        break;
                    }
                case 9: {
                        message.complexity = reader.uint64();
                        break;
                    }
                case 10: {
                        message.uniformity = reader.uint64();
                        break;
                    }
                case 11: {
                        message.cuppersCorrection = reader.uint64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ICupping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof beanconqueror.ICupping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {beanconqueror.ICupping} ICupping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ICupping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ICupping message.
         * @function verify
         * @memberof beanconqueror.ICupping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ICupping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.dryFragrance != null && message.hasOwnProperty("dryFragrance")) {
                properties._dryFragrance = 1;
                if (!$util.isInteger(message.dryFragrance) && !(message.dryFragrance && $util.isInteger(message.dryFragrance.low) && $util.isInteger(message.dryFragrance.high)))
                    return "dryFragrance: integer|Long expected";
            }
            if (message.wetAroma != null && message.hasOwnProperty("wetAroma")) {
                properties._wetAroma = 1;
                if (!$util.isInteger(message.wetAroma) && !(message.wetAroma && $util.isInteger(message.wetAroma.low) && $util.isInteger(message.wetAroma.high)))
                    return "wetAroma: integer|Long expected";
            }
            if (message.brightness != null && message.hasOwnProperty("brightness")) {
                properties._brightness = 1;
                if (!$util.isInteger(message.brightness) && !(message.brightness && $util.isInteger(message.brightness.low) && $util.isInteger(message.brightness.high)))
                    return "brightness: integer|Long expected";
            }
            if (message.flavor != null && message.hasOwnProperty("flavor")) {
                properties._flavor = 1;
                if (!$util.isInteger(message.flavor) && !(message.flavor && $util.isInteger(message.flavor.low) && $util.isInteger(message.flavor.high)))
                    return "flavor: integer|Long expected";
            }
            if (message.body != null && message.hasOwnProperty("body")) {
                properties._body = 1;
                if (!$util.isInteger(message.body) && !(message.body && $util.isInteger(message.body.low) && $util.isInteger(message.body.high)))
                    return "body: integer|Long expected";
            }
            if (message.finish != null && message.hasOwnProperty("finish")) {
                properties._finish = 1;
                if (!$util.isInteger(message.finish) && !(message.finish && $util.isInteger(message.finish.low) && $util.isInteger(message.finish.high)))
                    return "finish: integer|Long expected";
            }
            if (message.sweetness != null && message.hasOwnProperty("sweetness")) {
                properties._sweetness = 1;
                if (!$util.isInteger(message.sweetness) && !(message.sweetness && $util.isInteger(message.sweetness.low) && $util.isInteger(message.sweetness.high)))
                    return "sweetness: integer|Long expected";
            }
            if (message.cleanCup != null && message.hasOwnProperty("cleanCup")) {
                properties._cleanCup = 1;
                if (!$util.isInteger(message.cleanCup) && !(message.cleanCup && $util.isInteger(message.cleanCup.low) && $util.isInteger(message.cleanCup.high)))
                    return "cleanCup: integer|Long expected";
            }
            if (message.complexity != null && message.hasOwnProperty("complexity")) {
                properties._complexity = 1;
                if (!$util.isInteger(message.complexity) && !(message.complexity && $util.isInteger(message.complexity.low) && $util.isInteger(message.complexity.high)))
                    return "complexity: integer|Long expected";
            }
            if (message.uniformity != null && message.hasOwnProperty("uniformity")) {
                properties._uniformity = 1;
                if (!$util.isInteger(message.uniformity) && !(message.uniformity && $util.isInteger(message.uniformity.low) && $util.isInteger(message.uniformity.high)))
                    return "uniformity: integer|Long expected";
            }
            if (message.cuppersCorrection != null && message.hasOwnProperty("cuppersCorrection")) {
                properties._cuppersCorrection = 1;
                if (!$util.isInteger(message.cuppersCorrection) && !(message.cuppersCorrection && $util.isInteger(message.cuppersCorrection.low) && $util.isInteger(message.cuppersCorrection.high)))
                    return "cuppersCorrection: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a ICupping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof beanconqueror.ICupping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {beanconqueror.ICupping} ICupping
         */
        ICupping.fromObject = function fromObject(object) {
            if (object instanceof $root.beanconqueror.ICupping)
                return object;
            let message = new $root.beanconqueror.ICupping();
            if (object.dryFragrance != null)
                if ($util.Long)
                    (message.dryFragrance = $util.Long.fromValue(object.dryFragrance)).unsigned = true;
                else if (typeof object.dryFragrance === "string")
                    message.dryFragrance = parseInt(object.dryFragrance, 10);
                else if (typeof object.dryFragrance === "number")
                    message.dryFragrance = object.dryFragrance;
                else if (typeof object.dryFragrance === "object")
                    message.dryFragrance = new $util.LongBits(object.dryFragrance.low >>> 0, object.dryFragrance.high >>> 0).toNumber(true);
            if (object.wetAroma != null)
                if ($util.Long)
                    (message.wetAroma = $util.Long.fromValue(object.wetAroma)).unsigned = true;
                else if (typeof object.wetAroma === "string")
                    message.wetAroma = parseInt(object.wetAroma, 10);
                else if (typeof object.wetAroma === "number")
                    message.wetAroma = object.wetAroma;
                else if (typeof object.wetAroma === "object")
                    message.wetAroma = new $util.LongBits(object.wetAroma.low >>> 0, object.wetAroma.high >>> 0).toNumber(true);
            if (object.brightness != null)
                if ($util.Long)
                    (message.brightness = $util.Long.fromValue(object.brightness)).unsigned = true;
                else if (typeof object.brightness === "string")
                    message.brightness = parseInt(object.brightness, 10);
                else if (typeof object.brightness === "number")
                    message.brightness = object.brightness;
                else if (typeof object.brightness === "object")
                    message.brightness = new $util.LongBits(object.brightness.low >>> 0, object.brightness.high >>> 0).toNumber(true);
            if (object.flavor != null)
                if ($util.Long)
                    (message.flavor = $util.Long.fromValue(object.flavor)).unsigned = true;
                else if (typeof object.flavor === "string")
                    message.flavor = parseInt(object.flavor, 10);
                else if (typeof object.flavor === "number")
                    message.flavor = object.flavor;
                else if (typeof object.flavor === "object")
                    message.flavor = new $util.LongBits(object.flavor.low >>> 0, object.flavor.high >>> 0).toNumber(true);
            if (object.body != null)
                if ($util.Long)
                    (message.body = $util.Long.fromValue(object.body)).unsigned = true;
                else if (typeof object.body === "string")
                    message.body = parseInt(object.body, 10);
                else if (typeof object.body === "number")
                    message.body = object.body;
                else if (typeof object.body === "object")
                    message.body = new $util.LongBits(object.body.low >>> 0, object.body.high >>> 0).toNumber(true);
            if (object.finish != null)
                if ($util.Long)
                    (message.finish = $util.Long.fromValue(object.finish)).unsigned = true;
                else if (typeof object.finish === "string")
                    message.finish = parseInt(object.finish, 10);
                else if (typeof object.finish === "number")
                    message.finish = object.finish;
                else if (typeof object.finish === "object")
                    message.finish = new $util.LongBits(object.finish.low >>> 0, object.finish.high >>> 0).toNumber(true);
            if (object.sweetness != null)
                if ($util.Long)
                    (message.sweetness = $util.Long.fromValue(object.sweetness)).unsigned = true;
                else if (typeof object.sweetness === "string")
                    message.sweetness = parseInt(object.sweetness, 10);
                else if (typeof object.sweetness === "number")
                    message.sweetness = object.sweetness;
                else if (typeof object.sweetness === "object")
                    message.sweetness = new $util.LongBits(object.sweetness.low >>> 0, object.sweetness.high >>> 0).toNumber(true);
            if (object.cleanCup != null)
                if ($util.Long)
                    (message.cleanCup = $util.Long.fromValue(object.cleanCup)).unsigned = true;
                else if (typeof object.cleanCup === "string")
                    message.cleanCup = parseInt(object.cleanCup, 10);
                else if (typeof object.cleanCup === "number")
                    message.cleanCup = object.cleanCup;
                else if (typeof object.cleanCup === "object")
                    message.cleanCup = new $util.LongBits(object.cleanCup.low >>> 0, object.cleanCup.high >>> 0).toNumber(true);
            if (object.complexity != null)
                if ($util.Long)
                    (message.complexity = $util.Long.fromValue(object.complexity)).unsigned = true;
                else if (typeof object.complexity === "string")
                    message.complexity = parseInt(object.complexity, 10);
                else if (typeof object.complexity === "number")
                    message.complexity = object.complexity;
                else if (typeof object.complexity === "object")
                    message.complexity = new $util.LongBits(object.complexity.low >>> 0, object.complexity.high >>> 0).toNumber(true);
            if (object.uniformity != null)
                if ($util.Long)
                    (message.uniformity = $util.Long.fromValue(object.uniformity)).unsigned = true;
                else if (typeof object.uniformity === "string")
                    message.uniformity = parseInt(object.uniformity, 10);
                else if (typeof object.uniformity === "number")
                    message.uniformity = object.uniformity;
                else if (typeof object.uniformity === "object")
                    message.uniformity = new $util.LongBits(object.uniformity.low >>> 0, object.uniformity.high >>> 0).toNumber(true);
            if (object.cuppersCorrection != null)
                if ($util.Long)
                    (message.cuppersCorrection = $util.Long.fromValue(object.cuppersCorrection)).unsigned = true;
                else if (typeof object.cuppersCorrection === "string")
                    message.cuppersCorrection = parseInt(object.cuppersCorrection, 10);
                else if (typeof object.cuppersCorrection === "number")
                    message.cuppersCorrection = object.cuppersCorrection;
                else if (typeof object.cuppersCorrection === "object")
                    message.cuppersCorrection = new $util.LongBits(object.cuppersCorrection.low >>> 0, object.cuppersCorrection.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ICupping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof beanconqueror.ICupping
         * @static
         * @param {beanconqueror.ICupping} message ICupping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ICupping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.dryFragrance != null && message.hasOwnProperty("dryFragrance")) {
                if (typeof message.dryFragrance === "number")
                    object.dryFragrance = options.longs === String ? String(message.dryFragrance) : message.dryFragrance;
                else
                    object.dryFragrance = options.longs === String ? $util.Long.prototype.toString.call(message.dryFragrance) : options.longs === Number ? new $util.LongBits(message.dryFragrance.low >>> 0, message.dryFragrance.high >>> 0).toNumber(true) : message.dryFragrance;
                if (options.oneofs)
                    object._dryFragrance = "dryFragrance";
            }
            if (message.wetAroma != null && message.hasOwnProperty("wetAroma")) {
                if (typeof message.wetAroma === "number")
                    object.wetAroma = options.longs === String ? String(message.wetAroma) : message.wetAroma;
                else
                    object.wetAroma = options.longs === String ? $util.Long.prototype.toString.call(message.wetAroma) : options.longs === Number ? new $util.LongBits(message.wetAroma.low >>> 0, message.wetAroma.high >>> 0).toNumber(true) : message.wetAroma;
                if (options.oneofs)
                    object._wetAroma = "wetAroma";
            }
            if (message.brightness != null && message.hasOwnProperty("brightness")) {
                if (typeof message.brightness === "number")
                    object.brightness = options.longs === String ? String(message.brightness) : message.brightness;
                else
                    object.brightness = options.longs === String ? $util.Long.prototype.toString.call(message.brightness) : options.longs === Number ? new $util.LongBits(message.brightness.low >>> 0, message.brightness.high >>> 0).toNumber(true) : message.brightness;
                if (options.oneofs)
                    object._brightness = "brightness";
            }
            if (message.flavor != null && message.hasOwnProperty("flavor")) {
                if (typeof message.flavor === "number")
                    object.flavor = options.longs === String ? String(message.flavor) : message.flavor;
                else
                    object.flavor = options.longs === String ? $util.Long.prototype.toString.call(message.flavor) : options.longs === Number ? new $util.LongBits(message.flavor.low >>> 0, message.flavor.high >>> 0).toNumber(true) : message.flavor;
                if (options.oneofs)
                    object._flavor = "flavor";
            }
            if (message.body != null && message.hasOwnProperty("body")) {
                if (typeof message.body === "number")
                    object.body = options.longs === String ? String(message.body) : message.body;
                else
                    object.body = options.longs === String ? $util.Long.prototype.toString.call(message.body) : options.longs === Number ? new $util.LongBits(message.body.low >>> 0, message.body.high >>> 0).toNumber(true) : message.body;
                if (options.oneofs)
                    object._body = "body";
            }
            if (message.finish != null && message.hasOwnProperty("finish")) {
                if (typeof message.finish === "number")
                    object.finish = options.longs === String ? String(message.finish) : message.finish;
                else
                    object.finish = options.longs === String ? $util.Long.prototype.toString.call(message.finish) : options.longs === Number ? new $util.LongBits(message.finish.low >>> 0, message.finish.high >>> 0).toNumber(true) : message.finish;
                if (options.oneofs)
                    object._finish = "finish";
            }
            if (message.sweetness != null && message.hasOwnProperty("sweetness")) {
                if (typeof message.sweetness === "number")
                    object.sweetness = options.longs === String ? String(message.sweetness) : message.sweetness;
                else
                    object.sweetness = options.longs === String ? $util.Long.prototype.toString.call(message.sweetness) : options.longs === Number ? new $util.LongBits(message.sweetness.low >>> 0, message.sweetness.high >>> 0).toNumber(true) : message.sweetness;
                if (options.oneofs)
                    object._sweetness = "sweetness";
            }
            if (message.cleanCup != null && message.hasOwnProperty("cleanCup")) {
                if (typeof message.cleanCup === "number")
                    object.cleanCup = options.longs === String ? String(message.cleanCup) : message.cleanCup;
                else
                    object.cleanCup = options.longs === String ? $util.Long.prototype.toString.call(message.cleanCup) : options.longs === Number ? new $util.LongBits(message.cleanCup.low >>> 0, message.cleanCup.high >>> 0).toNumber(true) : message.cleanCup;
                if (options.oneofs)
                    object._cleanCup = "cleanCup";
            }
            if (message.complexity != null && message.hasOwnProperty("complexity")) {
                if (typeof message.complexity === "number")
                    object.complexity = options.longs === String ? String(message.complexity) : message.complexity;
                else
                    object.complexity = options.longs === String ? $util.Long.prototype.toString.call(message.complexity) : options.longs === Number ? new $util.LongBits(message.complexity.low >>> 0, message.complexity.high >>> 0).toNumber(true) : message.complexity;
                if (options.oneofs)
                    object._complexity = "complexity";
            }
            if (message.uniformity != null && message.hasOwnProperty("uniformity")) {
                if (typeof message.uniformity === "number")
                    object.uniformity = options.longs === String ? String(message.uniformity) : message.uniformity;
                else
                    object.uniformity = options.longs === String ? $util.Long.prototype.toString.call(message.uniformity) : options.longs === Number ? new $util.LongBits(message.uniformity.low >>> 0, message.uniformity.high >>> 0).toNumber(true) : message.uniformity;
                if (options.oneofs)
                    object._uniformity = "uniformity";
            }
            if (message.cuppersCorrection != null && message.hasOwnProperty("cuppersCorrection")) {
                if (typeof message.cuppersCorrection === "number")
                    object.cuppersCorrection = options.longs === String ? String(message.cuppersCorrection) : message.cuppersCorrection;
                else
                    object.cuppersCorrection = options.longs === String ? $util.Long.prototype.toString.call(message.cuppersCorrection) : options.longs === Number ? new $util.LongBits(message.cuppersCorrection.low >>> 0, message.cuppersCorrection.high >>> 0).toNumber(true) : message.cuppersCorrection;
                if (options.oneofs)
                    object._cuppersCorrection = "cuppersCorrection";
            }
            return object;
        };

        /**
         * Converts this ICupping to JSON.
         * @function toJSON
         * @memberof beanconqueror.ICupping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ICupping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ICupping
         * @function getTypeUrl
         * @memberof beanconqueror.ICupping
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ICupping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/beanconqueror.ICupping";
        };

        return ICupping;
    })();

    beanconqueror.IFlavor = (function() {

        /**
         * Properties of a IFlavor.
         * @memberof beanconqueror
         * @interface IIFlavor
         * @property {Array.<number|Long>|null} [predefinedFlavors] IFlavor predefinedFlavors
         * @property {Array.<string>|null} [customFlavors] IFlavor customFlavors
         */

        /**
         * Constructs a new IFlavor.
         * @memberof beanconqueror
         * @classdesc Represents a IFlavor.
         * @implements IIFlavor
         * @constructor
         * @param {beanconqueror.IIFlavor=} [properties] Properties to set
         */
        function IFlavor(properties) {
            this.predefinedFlavors = [];
            this.customFlavors = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IFlavor predefinedFlavors.
         * @member {Array.<number|Long>} predefinedFlavors
         * @memberof beanconqueror.IFlavor
         * @instance
         */
        IFlavor.prototype.predefinedFlavors = $util.emptyArray;

        /**
         * IFlavor customFlavors.
         * @member {Array.<string>} customFlavors
         * @memberof beanconqueror.IFlavor
         * @instance
         */
        IFlavor.prototype.customFlavors = $util.emptyArray;

        /**
         * Creates a new IFlavor instance using the specified properties.
         * @function create
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {beanconqueror.IIFlavor=} [properties] Properties to set
         * @returns {beanconqueror.IFlavor} IFlavor instance
         */
        IFlavor.create = function create(properties) {
            return new IFlavor(properties);
        };

        /**
         * Encodes the specified IFlavor message. Does not implicitly {@link beanconqueror.IFlavor.verify|verify} messages.
         * @function encode
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {beanconqueror.IIFlavor} message IFlavor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IFlavor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.predefinedFlavors != null && message.predefinedFlavors.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.predefinedFlavors.length; ++i)
                    writer.uint64(message.predefinedFlavors[i]);
                writer.ldelim();
            }
            if (message.customFlavors != null && message.customFlavors.length)
                for (let i = 0; i < message.customFlavors.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.customFlavors[i]);
            return writer;
        };

        /**
         * Encodes the specified IFlavor message, length delimited. Does not implicitly {@link beanconqueror.IFlavor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {beanconqueror.IIFlavor} message IFlavor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IFlavor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a IFlavor message from the specified reader or buffer.
         * @function decode
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {beanconqueror.IFlavor} IFlavor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IFlavor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.beanconqueror.IFlavor();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.predefinedFlavors && message.predefinedFlavors.length))
                            message.predefinedFlavors = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.predefinedFlavors.push(reader.uint64());
                        } else
                            message.predefinedFlavors.push(reader.uint64());
                        break;
                    }
                case 2: {
                        if (!(message.customFlavors && message.customFlavors.length))
                            message.customFlavors = [];
                        message.customFlavors.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a IFlavor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {beanconqueror.IFlavor} IFlavor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IFlavor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a IFlavor message.
         * @function verify
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IFlavor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.predefinedFlavors != null && message.hasOwnProperty("predefinedFlavors")) {
                if (!Array.isArray(message.predefinedFlavors))
                    return "predefinedFlavors: array expected";
                for (let i = 0; i < message.predefinedFlavors.length; ++i)
                    if (!$util.isInteger(message.predefinedFlavors[i]) && !(message.predefinedFlavors[i] && $util.isInteger(message.predefinedFlavors[i].low) && $util.isInteger(message.predefinedFlavors[i].high)))
                        return "predefinedFlavors: integer|Long[] expected";
            }
            if (message.customFlavors != null && message.hasOwnProperty("customFlavors")) {
                if (!Array.isArray(message.customFlavors))
                    return "customFlavors: array expected";
                for (let i = 0; i < message.customFlavors.length; ++i)
                    if (!$util.isString(message.customFlavors[i]))
                        return "customFlavors: string[] expected";
            }
            return null;
        };

        /**
         * Creates a IFlavor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {beanconqueror.IFlavor} IFlavor
         */
        IFlavor.fromObject = function fromObject(object) {
            if (object instanceof $root.beanconqueror.IFlavor)
                return object;
            let message = new $root.beanconqueror.IFlavor();
            if (object.predefinedFlavors) {
                if (!Array.isArray(object.predefinedFlavors))
                    throw TypeError(".beanconqueror.IFlavor.predefinedFlavors: array expected");
                message.predefinedFlavors = [];
                for (let i = 0; i < object.predefinedFlavors.length; ++i)
                    if ($util.Long)
                        (message.predefinedFlavors[i] = $util.Long.fromValue(object.predefinedFlavors[i])).unsigned = true;
                    else if (typeof object.predefinedFlavors[i] === "string")
                        message.predefinedFlavors[i] = parseInt(object.predefinedFlavors[i], 10);
                    else if (typeof object.predefinedFlavors[i] === "number")
                        message.predefinedFlavors[i] = object.predefinedFlavors[i];
                    else if (typeof object.predefinedFlavors[i] === "object")
                        message.predefinedFlavors[i] = new $util.LongBits(object.predefinedFlavors[i].low >>> 0, object.predefinedFlavors[i].high >>> 0).toNumber(true);
            }
            if (object.customFlavors) {
                if (!Array.isArray(object.customFlavors))
                    throw TypeError(".beanconqueror.IFlavor.customFlavors: array expected");
                message.customFlavors = [];
                for (let i = 0; i < object.customFlavors.length; ++i)
                    message.customFlavors[i] = String(object.customFlavors[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a IFlavor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {beanconqueror.IFlavor} message IFlavor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IFlavor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.predefinedFlavors = [];
                object.customFlavors = [];
            }
            if (message.predefinedFlavors && message.predefinedFlavors.length) {
                object.predefinedFlavors = [];
                for (let j = 0; j < message.predefinedFlavors.length; ++j)
                    if (typeof message.predefinedFlavors[j] === "number")
                        object.predefinedFlavors[j] = options.longs === String ? String(message.predefinedFlavors[j]) : message.predefinedFlavors[j];
                    else
                        object.predefinedFlavors[j] = options.longs === String ? $util.Long.prototype.toString.call(message.predefinedFlavors[j]) : options.longs === Number ? new $util.LongBits(message.predefinedFlavors[j].low >>> 0, message.predefinedFlavors[j].high >>> 0).toNumber(true) : message.predefinedFlavors[j];
            }
            if (message.customFlavors && message.customFlavors.length) {
                object.customFlavors = [];
                for (let j = 0; j < message.customFlavors.length; ++j)
                    object.customFlavors[j] = message.customFlavors[j];
            }
            return object;
        };

        /**
         * Converts this IFlavor to JSON.
         * @function toJSON
         * @memberof beanconqueror.IFlavor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IFlavor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IFlavor
         * @function getTypeUrl
         * @memberof beanconqueror.IFlavor
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IFlavor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/beanconqueror.IFlavor";
        };

        return IFlavor;
    })();

    /**
     * Roast enum.
     * @name beanconqueror.Roast
     * @enum {number}
     * @property {number} UNKNOWN_ROAST=0 UNKNOWN_ROAST value
     * @property {number} CINNAMON_ROAST=1 CINNAMON_ROAST value
     * @property {number} AMERICAN_ROAST=2 AMERICAN_ROAST value
     * @property {number} NEW_ENGLAND_ROAST=3 NEW_ENGLAND_ROAST value
     * @property {number} HALF_CITY_ROAST=4 HALF_CITY_ROAST value
     * @property {number} MODERATE_LIGHT_ROAST=5 MODERATE_LIGHT_ROAST value
     * @property {number} CITY_ROAST=6 CITY_ROAST value
     * @property {number} CITY_PLUS_ROAST=7 CITY_PLUS_ROAST value
     * @property {number} FULL_CITY_ROAST=8 FULL_CITY_ROAST value
     * @property {number} FULL_CITY_PLUS_ROAST=9 FULL_CITY_PLUS_ROAST value
     * @property {number} ITALIAN_ROAST=10 ITALIAN_ROAST value
     * @property {number} VIEANNA_ROAST=11 VIEANNA_ROAST value
     * @property {number} FRENCH_ROAST=12 FRENCH_ROAST value
     * @property {number} CUSTOM_ROAST=13 CUSTOM_ROAST value
     */
    beanconqueror.Roast = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_ROAST"] = 0;
        values[valuesById[1] = "CINNAMON_ROAST"] = 1;
        values[valuesById[2] = "AMERICAN_ROAST"] = 2;
        values[valuesById[3] = "NEW_ENGLAND_ROAST"] = 3;
        values[valuesById[4] = "HALF_CITY_ROAST"] = 4;
        values[valuesById[5] = "MODERATE_LIGHT_ROAST"] = 5;
        values[valuesById[6] = "CITY_ROAST"] = 6;
        values[valuesById[7] = "CITY_PLUS_ROAST"] = 7;
        values[valuesById[8] = "FULL_CITY_ROAST"] = 8;
        values[valuesById[9] = "FULL_CITY_PLUS_ROAST"] = 9;
        values[valuesById[10] = "ITALIAN_ROAST"] = 10;
        values[valuesById[11] = "VIEANNA_ROAST"] = 11;
        values[valuesById[12] = "FRENCH_ROAST"] = 12;
        values[valuesById[13] = "CUSTOM_ROAST"] = 13;
        return values;
    })();

    /**
     * BeanMix enum.
     * @name beanconqueror.BeanMix
     * @enum {number}
     * @property {number} UNKNOWN_BEAN_MIX=0 UNKNOWN_BEAN_MIX value
     * @property {number} SINGLE_ORIGIN=1 SINGLE_ORIGIN value
     * @property {number} BLEND=2 BLEND value
     */
    beanconqueror.BeanMix = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_BEAN_MIX"] = 0;
        values[valuesById[1] = "SINGLE_ORIGIN"] = 1;
        values[valuesById[2] = "BLEND"] = 2;
        return values;
    })();

    /**
     * BeanRoastingType enum.
     * @name beanconqueror.BeanRoastingType
     * @enum {number}
     * @property {number} UNKNOWN_BEAN_ROASTING_TYPE=0 UNKNOWN_BEAN_ROASTING_TYPE value
     * @property {number} FILTER=1 FILTER value
     * @property {number} ESPRESSO=2 ESPRESSO value
     * @property {number} OMNI=3 OMNI value
     */
    beanconqueror.BeanRoastingType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_BEAN_ROASTING_TYPE"] = 0;
        values[valuesById[1] = "FILTER"] = 1;
        values[valuesById[2] = "ESPRESSO"] = 2;
        values[valuesById[3] = "OMNI"] = 3;
        return values;
    })();

    return beanconqueror;
})();

export { $root as default };
