import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles["image-holder"]}>
				<Image
					src="/logoMedWhite.svg"
					layout={"fill"}
					objectFit="cover"
					alt=""
				/>
			</div>
			<div className={styles.copy}>
				<p>©</p>
				<p>
					created by{" "}
					<a
						href="https://devchallenges.io/portfolio/eklemis"
						target="_blank"
						rel="noreferrer"
						className={styles.user}
					>
						Eklemis
					</a>{" "}
					-{" "}
					<a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
						devChallenges.io
					</a>{" "}
					2022
				</p>
			</div>
		</footer>
	);
}
