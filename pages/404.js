import Head from "next/head";
import MetaHead from "../components/layout/MetaHead";
import styles from "../styles/Home.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <MetaHead title="Bai Mille" />

      <main className={styles.main}>
        <h1>Page Not Found</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

