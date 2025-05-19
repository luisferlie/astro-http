import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';

export const GET: APIRoute = async ({ request, params }) => {
    const { id } = params

    const post = await getEntry('blog', id as any);
    if(!post) {
        return new Response('Post not found', { status: 404 });
    }   

    return new Response(JSON.stringify(post), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    })
}

export const POST: APIRoute = async ({ request, params,cookies }) => {
    const body= await request.json();

    return new Response(JSON.stringify(body), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    })
}

export const PATCH: APIRoute = async ({ request, params }) => {
    const body = await request.json();

    return new Response(JSON.stringify({
        method:'PATCH',
        ...body
    }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    })
}