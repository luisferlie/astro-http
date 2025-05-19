import type { APIRoute } from 'astro';
import { db, Clients, eq } from 'astro:db';


export const GET: APIRoute = async ({ params }) => {
    const clientId = params.clientId || '';
    
   

    try {
        const client = await db.select().from(Clients).where(eq(Clients.id, +clientId));
        
        return new Response(JSON.stringify(client), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
        
    } catch (error) {
        return new Response(JSON.stringify({ msg: "error" }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
export const PATCH: APIRoute = async ({ request, params }) => {
    const clientId = params.clientId || '';
    try {
        const { id, ...body } = await request.json();
        const result = await db.update(Clients).set(body)
            .where(eq(Clients.id, +clientId))
        const updatedClient = await db.select().from(Clients).where(eq(Clients.id, +clientId))

        return new Response(JSON.stringify(updatedClient.at(0)), {
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
export const DELETE: APIRoute = async ({ request, params }) => {
    const clientId = params.clientId || '';
    try {
        // Validate request has JSON body
        const results = await db.delete(Clients)
            .where(eq(Clients.id, +clientId));

        return new Response(JSON.stringify({ msg: "eliminado cliente" }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {

        return new Response(JSON.stringify({ msg: "error" }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}