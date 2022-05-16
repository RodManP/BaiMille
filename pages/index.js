import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bai Mille Guest House</title>
        <meta name="description" content="Guest House" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <h1>Home</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
