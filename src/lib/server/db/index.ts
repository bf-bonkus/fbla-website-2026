import { drizzle } from 'drizzle-orm/bun-sqlite';
import Database from 'bun:sqlite';
import * as schema from './schema';
import { env } from '$env/dynamic/private';
import { blobToBase64 } from '../io';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = new Database(env.DATABASE_URL);

export const db = drizzle(client, { schema });

type NewItem = typeof schema.item.$inferInsert;

export async function addItem(itemName: string, desc: string, image: File) {
    const base64 = await blobToBase64(image)

    const newItem: NewItem = { name: itemName, desc: desc, image: base64};

    await db.insert(schema.item).values(newItem);
}