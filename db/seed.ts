import { getCollection } from 'astro:content';
import { db, Clients, Posts } from 'astro:db';

const posts = await getCollection('blog');
console.log('Posts encontrados:', posts[0]); // ← Añade esto para debuggear

if (posts.length === 0) {
	console.warn('No se encontraron posts en src/content/blog/');
}

export default async function () {


	await db.insert(Clients).values([
		{ id: 1, name: 'luis fernandez', age: 44, isActive: true },
		{ id: 2, name: 'ana perez', age: 55, isActive: false },
		{ id: 3, name: 'jose perez', age: 55, isActive: true },
		{ id: 4, name: 'lupepeis perez', age: 55, isActive: false },

	])

	await db.insert(Posts).values(
		posts.map((p) => ({
			id: p.id,
			title: p.data.title,
			likes: Math.round(Math.random() * 100)
		}))
	);

	console.log('seed executed');
}