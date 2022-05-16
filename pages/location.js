import Head from "next/head";
import MetaHead from "../components/layout/MetaHead"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <MetaHead title="Bai Mille Location" />

      <main className={styles.main}>
        <h1>Location</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
