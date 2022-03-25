import styles from "./header.module.css";
import Image from "next/image";
export default function Header() {
	return (
		<header>
			<a href="">
				<Image
					src="/CatwikiLogo.svg"
					width={128}
					height={43}
					alt="logo"
					className={styles.logo}
				/>
			</a>
		</header>
	);
}
