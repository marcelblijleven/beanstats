import {type z} from "zod";
import {createSelectSchema} from "drizzle-zod";

import {db} from "@/db";
import {eq} from "drizzle-orm";
import {shareEntry} from "@/db/schema";

const selectSchema = createSelectSchema(shareEntry);

/**
 * Retrieve share entry information for the provided share id.
 * The database id is omitted from the response.
 * @param shareId
 */
export async function getShareEntry(shareId: string) {
  const entry = await db.query.shareEntry.findFirst({
    where: eq(shareEntry.publicId, shareId)
  });

  if (!entry) return null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {id, ...rest} = entry;
  return rest satisfies Omit<z.infer<typeof selectSchema>, "id">;
}
