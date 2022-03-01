import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Pokémon</h1>
      </main>

      <footer className={styles.footer}>Powered by ME!</footer>
    </div>
  );
}
