import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Pokémon</h1>

        <p className={styles.description}>
          In this site you can check different ways of rendering a page in
          Next.js.
        </p>

        <p className={styles.description}>
          Use the navigation menu in the top to get to different pages and check
          the Network window in the Dev Tools to see the differences.
        </p>

        <p className={styles.description}>Have fun!</p>
      </main>
    </div>
  );
}
