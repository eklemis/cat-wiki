import { addSearch } from "../../helpers/search";

export default async function handler(req, res) {
	if (req.body.breedid && req.body.breedid.trim() !== "") {
		const row = await addSearch(req.body.breedid.trim());
		res.status(200).json({ message: "new search added", data: row });
	}
	res.status(404).json({ message: "Page not exist!" });
}
