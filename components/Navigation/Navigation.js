import Link from "next/link";
import styles from "../../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.navigationList}>
      <li className={styles.navigationListItem}>
        <Link href="/">Home</Link>
      </li>

      <div className={styles.div}></div>

      <li className={styles.navigationListItem}>
        <Link href="/pokelist">Pokémon List 10 CSR</Link>
      </li>

      <div className={styles.div}></div>

      <li className={styles.navigationListItem}>
        <Link href="/mypokemon/ssr">My Pokémon SSR</Link>
      </li>

      <div className={styles.div}></div>

      <li className={styles.navigationListItem}>
        <Link href="/mypokemon/ssg">My Pokémon SSG</Link>
      </li>

      <div className={styles.div}></div>

      <li className={styles.navigationListItem}>
        <Link href="/mypokemon/isr">My Pokémon ISR</Link>
      </li>
    </ul>
  );
};

export default Navigation;
