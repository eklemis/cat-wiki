import styles from "./top-section.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TopSection(props) {
	const { topSearch } = props;
	const [showSugestions, setShowSugestions] = useState(false);
	const [filterKeys, setFilterKeys] = useState(
		topSearch.map((search) => search.name)
	);
	const sugestions = filterKeys.map((item, idx) => (
		<li key={"sug" + idx}>{item}</li>
	));
	const topBreedEls = topSearch.map((search) => (
		<li key={"list-" + search.id}>
			<div className={styles["image-holder"]}>
				<Image
					src={search.image.url}
					layout={"fill"}
					objectFit="cover"
					alt={search.name + "'s photo"}
				></Image>
			</div>
			<p>{search.name}</p>
		</li>
	));
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
				<div styles="position:relative">
					<input
						name="breedkey"
						id="breedkey"
						placeholder="Enter your breed"
						onFocus={activateSugestions}
						onBlur={deactivateSugestions}
					/>
					{showSugestions && <ul>{sugestions}</ul>}
				</div>
			</section>
			<section className={styles["discover-section"]}>
				<div className={styles["hor-wrapper"]}>
					<h2>66+ Breeds For you to discover</h2>
					<a href="#" className={styles["see-more"]}>
						SEE MORE
					</a>
				</div>
				<div className={styles["hor-wrapper"]}>
					<ul className={styles.featured}>{topBreedEls}</ul>
				</div>
			</section>
		</div>
	);
}
