import { PrismaClient } from "@prisma/client";

export async function addSearch(breedId) {
	const prisma = new PrismaClient();
	const newSearch = await prisma.searching.create({
		data: {
			breedId: breedId,
		},
	});
	return newSearch;
}

export async function getAllSearch() {
	const prisma = new PrismaClient();
	const result = await prisma.searching.groupBy({
		by: ["breedId"],
		_count: {
			id: true,
		},
		orderBy: {
			_count: {
				id: "desc",
			},
		},
		take: 10,
	});
	const formatedResult = result.map((row) => ({
		breedId: row.breedId,
		searchCount: row._count.id,
	}));
	return formatedResult;
}
