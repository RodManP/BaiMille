import Head from "next/head";
import styles from "../styles/Home.module.css";
import MetaHead from "../components/layout/MetaHead"

export default function Home() {
  return (
    <div className={styles.container}>
      <MetaHead title="Bai Mille Guest House" />

      <main className={styles.main}>
        <h1>Home</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
