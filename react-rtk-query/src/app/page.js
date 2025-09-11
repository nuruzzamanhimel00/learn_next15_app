
import styles from "./page.module.css";
import Counter from "../components/Counter.js";

export default function Home() {
  return (
    <div className={styles.page}>
        <p> lorem ipsum dolor sit amet </p>
        <Counter />
    </div>
  );
}
