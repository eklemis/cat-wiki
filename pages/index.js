import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
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
			<Header />
			<TopSection topSearch={topSearch} breeds={breeds} />
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
