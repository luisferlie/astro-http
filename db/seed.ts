import { db, Clients } from 'astro:db';


export default async function () {


	await db.insert(Clients).values([
		{ id: 1, name: 'luis fernandez', age: 44, isActive: true },
		{ id: 2, name: 'ana perez', age: 55, isActive: false },
		{ id: 3, name: 'jose perez', age: 55, isActive: true },
		{ id: 4, name: 'lupepeis perez', age: 55, isActive: false },

	])
}