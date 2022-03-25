import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopSection from "../components/top-section";
import BottomSection from "../components/bottom-section";
import Footer from "../components/footer";
import getAllBreeds from "../helpers/getbreeds";
import { getAllSearch } from "../helpers/search";

export default function Home(props) {
	const { breeds, searchings, topSearch } = props;
	return (
		<div className={styles.container}>
			<Head>
				<title>Cat wiki</title>
				<meta name="description" content="Cat breed wiki" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header>
				<Image
					src="/CatwikiLogo.svg"
					width={128}
					height={43}
					alt="logo"
					className={styles.logo}
				/>
			</header>
			<TopSection topSearch={topSearch} />
			<BottomSection />
			<Footer />
		</div>
	);
}

export async function getStaticProps(context) {
	const allBreeds = await getAllBreeds();
	const allSearch = await getAllSearch();
	function getSearch(id) {
		return allBreeds.filter((row) => row.id === id)[0];
	}
	const mergedSearch = allSearch.map((search) => getSearch(search.breedId));
	return {
		props: {
			breeds: allBreeds,
			searchings: allSearch,
			topSearch: mergedSearch,
		},
		revalidate: 60, // will be passed to the page component as props
	};
}
