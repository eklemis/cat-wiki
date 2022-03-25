import styles from "./bottom-section.module.css";
import Image from "next/image";

export default function BottomSection() {
	return (
		<div className={styles["main-wrapper"]}>
			<section className={styles.why}>
				<h2>Why should you have a cat?</h2>
				<p>
					Having a cat around you can actually trigger the release of calming
					chemicals in your body which lower your stress and anxiety leves
				</p>
				<a href="#" className={styles["read-more"]}>
					READ MORE
				</a>
			</section>
			<div className={styles["photo-grid"]}>
				<div className={styles["col-1"]}>
					<img src="/images/image 2.png" alt="" />
					<img src="/images/image 1.png" alt="" />
				</div>
				<div className={styles["col-2"]}>
					<img src="/images/image 3.png" alt="" />
				</div>
			</div>
		</div>
	);
}
