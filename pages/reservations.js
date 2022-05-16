import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vai Mille Guest House</title>
        <meta name="description" content="Guest House" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <h1>Reservations</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
