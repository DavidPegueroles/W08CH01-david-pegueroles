import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokédex (again...)</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      {children}
      <footer className={styles.footer}>Powered by ME!</footer>
    </>
  );
};

export default Layout;
