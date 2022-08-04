import Layout from "../components/layout/Layout";
import styles from "../styles/reservations.module.css";
import Link from "next/link";

export default function Reservations() {
  return (
    <Layout title="Bai Mille Reservation">
      <main className={styles.main}>
        <h1>Reservations</h1>
        <button>
          <Link href={"/"}>
            <a>
              <h2>Book</h2>
            </a>
          </Link>
        </button>
      </main>
    </Layout>
  );
}
