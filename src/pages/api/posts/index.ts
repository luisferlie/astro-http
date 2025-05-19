import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';






export const GET: APIRoute = async ({ request, params }) => {
    const posts = await getCollection('blog');
    console.log(request);
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
        const post = await getEntry('blog', id);
        if (post) {
            return new Response(JSON.stringify(post), {
                status: 201,
                headers: { 'Content-Type': 'application/json' }
            });
            return new Response('Post not found', { status: 404 });
        }
    } else

        return new Response(JSON.stringify(posts), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
        });

}
