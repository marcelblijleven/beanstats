import {z} from "zod";
import {createInsertSchema} from "drizzle-zod";
import {shareEntry} from "@/db/schema";
import {db} from "@/db";
import {eq} from "drizzle-orm";

export const createSchema = createInsertSchema(shareEntry, {
  name: z.string().optional(),
  roaster: z.string().optional(),
  variety: z.string().optional(),
  processing: z.string().optional(),
  beanconquerorUrl: z.string(),
}).omit({id: true, publicId: true});

export type ShareEntryInput = z.infer<typeof createSchema>;

export async function createShareEntry(data: ShareEntryInput) {
  const result = await db.insert(shareEntry).values(data);
  const id = parseInt(result.insertId);

  try {
    return db.query.shareEntry.findFirst({
      where: eq(shareEntry.id, id)
    });
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
      return null;
    }

    console.error("something went wrong while shortening the url");
    return null;
  }
}

