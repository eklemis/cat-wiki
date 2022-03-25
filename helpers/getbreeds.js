import { addSearch } from "./search";
function changeImageUrl(oldData, breedId, newUrl) {
	const newData = oldData.map((row) => {
		if (row.id === breedId) {
			const newRow = { ...row };
			newRow.image.url = newUrl;
			return newRow;
		}
		return row;
	});
	return newData;
}
export default async function getAllBreeds() {
	const allBreeds = await fetch("https://api.thecatapi.com/v1/breeds", {
		headers: {
			"Content-Type": "application/json",
			"x-api-key": process.env.api_key,
		},
	});
	let data = await allBreeds.json();
	data = changeImageUrl(
		data,
		"beng",
		"https://i.ibb.co/fCYGfT6/bodi-raw-q-rep-JO7x-PA-unsplash.jpg"
	);
	data = changeImageUrl(
		data,
		"srex",
		"https://i.ibb.co/0rNdvDL/amber-kipp-75715-CVEJh-I-unsplash.jpg"
	);
	return data;
}
export async function getABreed(breedId) {
	const result = await fetch(
		"https://api.thecatapi.com/v1/images/search?breed_id=" +
			breedId +
			"&limit=9",
		{
			headers: {
				"Content-Type": "application/json",
				"x-api-key": process.env.api_key,
			},
		}
	);
	const data = await result.json();
	let breed;
	if (data.length > 0) {
		//1: Record as search data
		const newSearch = await addSearch(breedId);
		//2: Return value
		breed = data[0].breeds[0];
		const imageUrls = data.map((row) => row.url);
		const formatedData = { ...breed, imageUrls: imageUrls };
		return formatedData;
	}
	return breed;
}
