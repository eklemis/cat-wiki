import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
	return (
		<header>
			<Link href="/">
				<a>
					<Image
						src="/CatwikiLogo.svg"
						width={128}
						height={43}
						alt="logo"
						className={styles.logo}
					/>
				</a>
			</Link>
		</header>
	);
}
