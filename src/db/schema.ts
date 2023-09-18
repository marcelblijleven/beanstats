import {mysqlTable, serial, text, varchar, int, timestamp, date, decimal, boolean} from 'drizzle-orm/mysql-core'
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
});


export const roasters = mysqlTable("roasters", {
    id: serial("id").primaryKey(),
    publicId: varchar("public_id", {length: 12}).$defaultFn(generateNanoid),
    name: varchar("name", {length: 255}).notNull(),
    country: varchar("name", {length: 255}),
    userId: int("user_id").notNull(),
    modified: timestamp("modified").onUpdateNow().default(sql`CURRENT_TIMESTAMP`),
    created: timestamp("created").default(sql`CURRENT_TIMESTAMP`),
});

export const beanVarieties = mysqlTable("varieties", {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at").defaultNow(),
    name: varchar("name", {length: 255}),
    processing: varchar("processing", {length: 255}),
    country: varchar("country", {length: 255}),
    region: varchar("region", {length: 255}),
    farm: varchar("farm", {length: 255}),
    farmer: varchar("farmer", {length: 255}),
    elevation: varchar("elevation", {length: 80}),
    beanId: int("bean_id").notNull(),
});

export const beans = mysqlTable("beans", {
    id: serial("id").primaryKey(),
    publicId: varchar("public_id", {length: 12}).$defaultFn(generateNanoid),
    createdAt: timestamp("created_at").defaultNow(),
    name: varchar("name", {length: 255}).notNull(),
    roastDate: date("roast_date"),
    buyDate: date("buy_date"),
    externalId: varchar("external_id", {length: 255}),
    notes: text("notes"),
    weight: decimal("weight", {precision: 10, scale: 2}),
    price: decimal("price", {precision: 10, scale: 2}),
    roasterId: int("roaster_id").notNull(),
    isPublic: boolean("is_public").default(false),
    isArchived: boolean("is_archived").default(false),
    userId: int("user_id").notNull(),
    modified: timestamp("modified").onUpdateNow().default(sql`CURRENT_TIMESTAMP`),
    created: timestamp("created").default(sql`CURRENT_TIMESTAMP`),
});

// Relations
export const usersRelations =  relations(users, ({ many }) => ({
    roasters: many(roasters),
    beans: many(beans),
}));

export const beansRelations = relations(beans, ({ many, one}) => ({
    roaster: one(roasters, {
        fields: [beans.roasterId],
        references: [roasters.id],
    }),
    varieties: many(beanVarieties),
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

export const roastersRelations = relations(roasters, ({ many, one }) => ({
    user: one(users, {
        fields: [roasters.userId],
        references: [users.id]
    }),
    beans: many(beans),
}));