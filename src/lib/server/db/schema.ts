import { sql } from "drizzle-orm";
import { integer, sqliteTable, text, blob } from 'drizzle-orm/sqlite-core';

export const item = sqliteTable('item', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	desc: text('desc'),
	date: text().default(sql`CURRENT_DATE`),
	image: text('image'), // base64url converted image
});
