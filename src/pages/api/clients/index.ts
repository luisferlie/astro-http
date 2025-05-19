import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';
import { Clients, db } from 'astro:db';






export const GET: APIRoute = async ({ request, params }) => {
  
    const users = await db.select().from(Clients).all();
    console.log("🚀 ~ constGET:APIRoute= ~ users:", users);

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    })
}


export const POST: APIRoute = async ({ request }) => {
    try {
        const { id, ...body } = await request.json();

        const { lastInsertRowid } = await db.insert(Clients).values(body);

        console.log("🚀 ~ constPOST:APIRoute= ~ lastInsertRowid:", lastInsertRowid);

        return new Response(JSON.stringify({
            id: +lastInsertRowid?.toString(),
            ...body
        }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        })

    } catch (error) {
        return new Response(JSON.stringify({ msg: 'no body found' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

export const PATCH: APIRoute = async ({ request, params }) => {
    const body = await request.json();

    return new Response(JSON.stringify({
        method: 'PATCH',
        ...body
    }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    })
}