import styles from "../styles/home.module.css";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout title="Bai Mille Guest House">
      <main className={styles.main}>
        <h1>Home</h1>
      </main>
    </Layout>
  );
}
