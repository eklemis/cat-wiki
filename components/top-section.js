import styles from "./top-section.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function TopSection(props) {
	const { breeds, topSearch } = props;
	const [filteredBreeds, setFilteredBreeds] = useState(topSearch);
	const [keyword, setKeyword] = useState("");
	const keywordChange = (ev) => {
		const newKeyword = ev.target.value.trim();
		setKeyword(newKeyword);
		if (newKeyword !== "") {
			setFilteredBreeds(
				breeds.filter((breed) =>
					breed.name.toLowerCase().includes(newKeyword.toLowerCase())
				)
			);
		} else {
			setFilteredBreeds(topSearch);
		}
	};
	const [showSugestions, setShowSugestions] = useState(false);
	function handleClick(name) {
		setKeyword(name);
	}

	const sugestions = filteredBreeds.map((row, idx) => (
		<a
			href={"/breeds/" + row.id}
			key={"sug" + idx}
			onClick={handleClick.bind(null, row.name)}
		>
			<li>{row.name}</li>
		</a>
	));
	const topBreedEls = topSearch.map((search, idx) => {
		if (idx < 4)
			return (
				<li key={"list-" + search.id}>
					<a href={"/breeds/" + search.id}>
						<div className={styles["image-holder"]}>
							<Image
								src={search.image.url}
								layout={"fill"}
								objectFit="cover"
								alt={search.name + "'s photo"}
							></Image>
						</div>
						<p>{search.name}</p>
					</a>
				</li>
			);
		return "";
	});
	function activateSugestions() {
		setShowSugestions(true);
	}
	function deactivateSugestions() {
		setShowSugestions(false);
	}
	return (
		<div className={styles["main-wrapper"]}>
			<section className={styles["search-section"]}>
				<Image
					src="/logoMedWhite.svg"
					width={250}
					height={87}
					alt="Catwiki Logo"
					className={styles.logo}
				/>
				<h2>Get to know more about your cat breed</h2>
				<div onMouseLeave={deactivateSugestions}>
					<input
						name="breedkey"
						id="breedkey"
						placeholder="Enter your breed"
						onFocus={activateSugestions}
						onChange={keywordChange}
						value={keyword}
					/>
					{showSugestions && <ul>{sugestions}</ul>}
				</div>
			</section>
			<section className={styles["discover-section"]}>
				<h2>Most Searched Breeds</h2>
				<div className={styles["hor-wrapper"]}>
					<p className={styles.title}>66+ Breeds For you to discover</p>
					<Link href="/breeds/topten">
						<a className={styles["see-more"]}>SEE MORE</a>
					</Link>
				</div>
				<div className={styles["hor-wrapper"]}>
					<ul className={styles.featured}>{topBreedEls}</ul>
				</div>
			</section>
		</div>
	);
}
