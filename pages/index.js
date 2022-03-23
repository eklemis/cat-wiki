import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopSection from "../components/top-section";
import getAllBreeds from "../helpers/getbreeds";

export default function Home(props) {
	const breeds = props.breeds;
	console.log(breeds);
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
			<TopSection />
			<main className={styles.main}></main>
		</div>
	);
}

export async function getStaticProps(context) {
	const response = await getAllBreeds();
	return {
		props: {
			breeds: response,
		},
		revalidate: 120, // will be passed to the page component as props
	};
}
