import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "./breeds.module.css";
import Image from "next/image";
import Stats from "../../components/stats";
import { addSearch } from "../../helpers/search";
import { getABreed } from "../../helpers/getbreeds";

export default function BreedPage(props) {
	const breed = props.breedData;
	if (breed === 0) return <h1>404 - Page Not Found</h1>;
	const images = breed.imageUrls.map((url, idx) => {
		if (idx == 0) return "";
		return (
			<li key={"imglist-" + breed.id + "-" + idx}>
				<Image
					src={url}
					width={278}
					height={278}
					alt={"Other photo " + (idx + 1)}
					objectFit={"cover"}
					blurDataURL="/images/blured.jpg"
					placeholder="blur"
				/>
			</li>
		);
	});
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.main}>
				<section className={styles.info}>
					<figure>
						<div className={styles["main-image"]}>
							<Image
								width={371}
								height={371}
								src={breed.imageUrls[0]}
								alt={breed.name + "main photo"}
								blurDataURL="/images/blured.jpg"
								placeholder="blur"
								objectFit={"cover"}
								priority
							/>
						</div>
					</figure>
					<div className={styles["detail-info"]}>
						<h1>{breed.name}</h1>
						<p>{breed.description}</p>
						<p>
							<span>Temperament:</span> {breed.temperament}
						</p>
						<p>
							<span>Origin:</span> {breed.origin}
						</p>
						<p>
							<span>Life Span:</span> {breed.life_span + " years"}
						</p>
						<Stats label="Adaptability:" value={breed.adaptability} />
						<Stats label="Affection level:" value={breed.affection_level} />
						<Stats label="Child Friendly:" value={breed.child_friendly} />
						<Stats label="Grooming:" value={breed.grooming} />
						<Stats label="Intelligence:" value={breed.intelligence} />
						<Stats label="Health issues:" value={breed.health_issues} />
						<Stats label="Social needs:" value={breed.social_needs} />
						<Stats label="Stranger friendly:" value={breed.stranger_friendly} />
					</div>
				</section>
				<section className={styles["photo-grid"]}>
					<h2>Other photos</h2>
					<ul>{images}</ul>
				</section>
			</div>
			<Footer />
		</div>
	);
}
export async function getServerSideProps({ params }) {
	const newSearch = await addSearch(params.breedid);
	let breedData = await getABreed(params.breedid);
	if (!breedData) breedData = 0;
	return {
		props: {
			breedData: breedData,
		},
	};
}
