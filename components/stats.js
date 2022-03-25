import styles from "./stats.module.css";
export default function Stats({ label, value }) {
	const values = [1, 2, 3, 4, 5];
	const lists = values.map((val) => {
		if (val <= value) {
			return <li className={styles.include} key={label + val}></li>;
		}
		return <li key={label + val}></li>;
	});
	return (
		<div className={styles.holder}>
			<span>{label}</span>
			<ul>{lists}</ul>
		</div>
	);
}
