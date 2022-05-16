import Head from "next/head";
import MetaHead from "../components/layout/MetaHead"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <MetaHead title="Bai Mille About" />

      <main className={styles.main}>
        <h1>About</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
