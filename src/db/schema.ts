import {mysqlTable, serial, text, varchar, int, timestamp, date, decimal, boolean, index} from 'drizzle-orm/mysql-core'
import {relations, sql} from "drizzle-orm";
import {generateNanoid} from "./utils";

export const users = mysqlTable("users", {
    id: serial("id").primaryKey(),
    publicId: varchar("public_id", {length: 12}).$defaultFn(generateNanoid).notNull(),
    clerkId: varchar("clerk_id", { length: 191 }).notNull(),
    email: varchar("email", {length: 255}),
    username: varchar("username", {length: 255}),
    modified: timestamp("modified").onUpdateNow().default(sql`CURRENT_TIMESTAMP`),
    created: timestamp("created").default(sql`CURRENT_TIMESTAMP`),
}, (table) => {
    return {
        publicIdIndex: index("public_id_index").on(table.publicId),
        clerkIdIndex: index("clerk_id_index").on(table.clerkId),
    }
});


export const roasters = mysqlTable("roasters", {
    id: serial("id").primaryKey(),
    publicId: varchar("public_id", {length: 12}).$defaultFn(generateNanoid).unique(),
    name: varchar("name", {length: 255}).notNull().unique(),
    country: varchar("country", {length: 255}),
    userId: int("user_id").notNull(),
    modified: timestamp("modified").onUpdateNow().default(sql`CURRENT_TIMESTAMP`),
    created: timestamp("created").default(sql`CURRENT_TIMESTAMP`),
}, (table) => {
    return {
        publicIdIndex: index("public_id_index").on(table.publicId),
        userIdIndex: index("user_id_index").on(table.userId),
        nameIndex: index("name_index").on(table.name),
    }
});

export const beanVarieties = mysqlTable("varieties", {
    id: serial("id").primaryKey(),
    created: timestamp("created").defaultNow(),
    name: varchar("name", {length: 255}),
    processing: varchar("processing", {length: 255}),
    country: varchar("country", {length: 255}),
    region: varchar("region", {length: 255}),
    farm: varchar("farm", {length: 255}),
    farmer: varchar("farmer", {length: 255}),
    elevation: varchar("elevation", {length: 80}),
    beanId: int("bean_id").notNull(),
}, (table) => {
    return {
        beanId: index("bean_id_index").on(table.beanId),
        nameIndex: index("name_index").on(table.name),
        processingIndex: index("processing_index").on(table.processing),
    }
});

export const beans = mysqlTable("beans", {
    id: serial("id").primaryKey(),
    publicId: varchar("public_id", {length: 12}).$defaultFn(generateNanoid).unique(),
    name: varchar("name", {length: 255}).notNull(),
    roastDate: date("roast_date", {mode: "string"}),
    buyDate: date("buy_date", {mode: "string"}),
    externalId: varchar("external_id", {length: 255}).unique(),
    notes: text("notes"),
    weight: decimal("weight", {precision: 10, scale: 2}),
    price: decimal("price", {precision: 10, scale: 2}),
    roasterId: int("roaster_id").notNull(),
    isPublic: boolean("is_public").default(false),
    isArchived: boolean("is_archived").default(false),
    isFinished: boolean("is_finished").default(false),
    userId: int("user_id").notNull(),
    rating: int("rating"),
    roastedFor: varchar("roasted_for", {length: 20}),
    modified: timestamp("modified").onUpdateNow().default(sql`CURRENT_TIMESTAMP`),
    created: timestamp("created").default(sql`CURRENT_TIMESTAMP`),
}, (table) => {
    return {
        publicIdIndex: index("public_id_index").on(table.publicId),
        userIdIndex: index("user_id_index").on(table.userId),
        nameIndex: index("name_index").on(table.name),
        roasterIdIndex: index("roaster_id_index").on(table.roasterId),
    }
});

export const cafeBrews = mysqlTable("cafe_brews", {
    id: serial("id").primaryKey(),
    publicId: varchar("public_id", {length: 12}).$defaultFn(generateNanoid).unique(),
    userId: int("user_id").notNull(),
    type: varchar("type", {length: 128}).notNull(),
    coffeeVariety: varchar("coffee_variety", {length: 128}),
    coffeeOrigin: varchar("coffee_origin", {length: 128}),
    date: date("date", {mode: "string"}),
    notes: text("notes"),
    cafe: varchar("cafe", {length: 128}).notNull(),
    cafeCity: varchar("cafe_city", {length: 128}),
    cafeCountry: varchar("cafe_country", {length: 80}),
    price: decimal("price", {precision: 10, scale: 2}),
    rating: int("rating"),
    isPublic: boolean("is_public").default(false),
    modified: timestamp("modified").onUpdateNow().default(sql`CURRENT_TIMESTAMP`),
    created: timestamp("created").default(sql`CURRENT_TIMESTAMP`),
}, (table) => {
    return {
        publicIdIndex: index("public_id_index").on(table.publicId),
        userIdIndex: index("user_id_index").on(table.userId),
        typeIndex: index("name_index").on(table.type),
    }
});

export const freezeEntries = mysqlTable("freeze_entries", {
    id: serial("id").primaryKey(),
    publicId: varchar("public_id", {length: 12}).$defaultFn(generateNanoid).unique(),
    userId: int("user_id").notNull(),
    label: varchar("label", {length: 128}).notNull(),
    beanId: int("bean_id").notNull(),
    weight: decimal("weight", {precision: 10, scale: 2}).notNull(),
    freezeDate: date("freeze_date", {mode: "string"}).notNull(),
    frozen: boolean("frozen").default(true),
    notes: text("notes"),
    modified: timestamp("modified").onUpdateNow().default(sql`CURRENT_TIMESTAMP`),
    created: timestamp("created").default(sql`CURRENT_TIMESTAMP`),
}, (table) => {
    return {
        publicIdIndex: index("public_id_index").on(table.publicId),
        userIdIndex: index("user_id_index").on(table.userId),
        beanIdIndex: index("bean_id_index").on(table.beanId),
    }
});

// Relations
export const usersRelations =  relations(users, ({ many }) => ({
    roasters: many(roasters),
    beans: many(beans),
    cafeBrews: many(cafeBrews),
    freezeEntries: many(freezeEntries),
}));

export const beansRelations = relations(beans, ({ many, one}) => ({
    roaster: one(roasters, {
        fields: [beans.roasterId],
        references: [roasters.id],
    }),
    varieties: many(beanVarieties),
    freezeEntries: many(freezeEntries),
    user: one(users, {
        fields: [beans.userId],
        references: [users.id],
    })
}));

export const beanVarietiesRelations = relations(beanVarieties, ({ one }) => ({
    bean: one(beans, {
        fields: [beanVarieties.beanId],
        references: [beans.id],
    })
}));

export const freezeEntryRelations = relations(freezeEntries, ({one}) => ({
    bean: one(beans, {
        fields: [freezeEntries.beanId],
        references: [beans.id],
    }),
    user: one(users, {
        fields: [freezeEntries.userId],
        references: [users.id],
    })
}))

export const roastersRelations = relations(roasters, ({ many, one }) => ({
    user: one(users, {
        fields: [roasters.userId],
        references: [users.id]
    }),
    beans: many(beans),
}));

export const cafeBrewRelations = relations(cafeBrews, ({one}) => ({
    user: one(users, {
        fields: [cafeBrews.userId],
        references: [users.id],
    }),
}));