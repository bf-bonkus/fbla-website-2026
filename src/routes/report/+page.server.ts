import type { Actions } from './$types';
import { addItem } from '$lib/server/db';

export const actions = {
    report: async ({ request }) => {
        const data = await request.formData();

        const name = data.get('name');
        const desc = data.get('desc');
        const image = data.get('image');

        await addItem(name, desc, image);
    }
} satisfies Actions;