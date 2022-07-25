import Layout from "../components/layout/Layout";
import styles from "../styles/404.module.css"

export default function NotFound() {
  return (
    <Layout title="Not Found">
      <main className={styles.main}>
        <h1>Not Found</h1>
      </main>
    </Layout>
  );
}

