import styles from "./cards.module.css";
import utilStyles from "../../styles/utils.module.css";

export default function SearchCard({ name, color }: { name: string, color: string }) {
  return (
    <div className={` ${styles.searchCard}`}>
      <div className={` ${styles.searchCardColor} ${utilStyles[color]} `}></div>
      <div className={styles.searchCardTitle}>{name}</div>
    </div>
  );
}
