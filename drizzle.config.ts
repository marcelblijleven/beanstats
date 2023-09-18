import type {Config} from "drizzle-kit";
import {config} from 'dotenv'

config({path: ".env.local"});

if (!process.env.DATABASE_URL) throw new Error("Database URL not set")

export default {
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    driver: "mysql2",
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    }
} satisfies Config;
