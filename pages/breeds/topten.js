import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./topten.module.css";
import getAllBreeds, { getABreed } from "../../helpers/getbreeds";
import { getAllSearch } from "../../helpers/search";
import Image from "next/image";
import Link from "next/link";
export default function TopSearchings(props) {
	const tops = props.topSearch;
	let topSearch = tops.map((row, index) => {
		const wRow = row;
		/*if (wRow.image)
			return (
				<li key={"top-" + wRow.id}>
					<div className={styles["image-box"]}>
						<Image
							src={wRow.image.url}
							width={170}
							height={170}
							alt={wRow.name + " photo"}
							objectFit="cover"
						/>
					</div>
					<div className={styles.description}>
						<Link href={`/breeds/${wRow.id}`}>
							<a>
								<h2>
									{index + 1}. {wRow.name}
								</h2>
							</a>
						</Link>
						<p>{wRow.description}</p>
					</div>
				</li>
			);
*/
		return (
			<li key={"top-" + wRow.id}>
				<div className={styles["image-box"]}>
					<Image
						src={wRow.image.url}
						width={170}
						height={170}
						alt={wRow.name + " photo"}
						objectFit="cover"
					/>
				</div>
				<div className={styles.description}>
					<Link href={`/breeds/${wRow.id}`}>
						<a>
							<h2>
								{index + 1}. {wRow.name}
							</h2>
						</a>
					</Link>
					<p>{wRow.description}</p>
				</div>
			</li>
		);
	});
	return (
		<div className={styles.container}>
			<Header />
			<section className={styles.main}>
				<h1>Top 10 most searched breeds</h1>
				<ul>{topSearch}</ul>
			</section>
			<Footer />
		</div>
	);
}
export async function getServerSideProps() {
	const allBreeds = await getAllBreeds();
	const allSearch = await getAllSearch();
	function getSearch(id) {
		return allBreeds.filter((row) => row.id === id)[0];
	}
	const mergedSearch = allSearch.map((search) => {
		let newRow = getSearch(search.breedId);

		if (!newRow.image) {
			newRow.image = { url: "/images/failed-load.png" };
			//return newRow;
			/*			
			const getData = async () =>
				await fetch(
					"https://api.thecatapi.com/v1/images/search?breed_id=" +
						newRow.id +
						"&limit=1",
					{
						headers: {
							"Content-Type": "application/json",
							"x-api-key": process.env.api_key,
						},
					}
				)
					.then((result) => result.json())
					.then((data) => {
						console.log(data[0].url);
						newRow.image = { url: data[0].url };
						return newRow;
					})
					.catch((err) => {
						newRow.image = { url: "" };
						return newRow;
					});
			return getData();
			*/
		}

		return newRow;
	});
	const tops = mergedSearch;
	return {
		props: {
			topSearch: tops,
		},
	};
}
