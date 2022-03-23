export default async function getAllBreeds() {
	const allBreeds = await fetch("https://api.thecatapi.com/v1/breeds", {
		headers: {
			"Content-Type": "application/json",
			"x-api-key": process.env.api_key,
		},
	});
	return allBreeds.json();
}
