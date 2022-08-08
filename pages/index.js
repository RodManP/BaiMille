import Layout from "../components/layout/Layout";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import NavItem from "../components/layout/NavItem";

export default function Home() {
  return (
    <Layout title="Bai Mille Guest House">
      <main className={styles.body}>
        <div className={styles.container}>
          <div className={styles.card_section}>
            <div className={styles.card}>
              <Image
                className={styles.image}
                src="/images/bansko.jpg"
                alt="Bansko"
                width={350}
                height={500}
                objectFit="cover"
              />
              <div className={styles.intro}>
                <h1 className={styles.title}>Bansko</h1>
                <p className={styles.subtitle}>
                  Bulgaria Ski Resort <br></br> Lift is 10 min away walking
                </p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.image}
                src="/images/guest_house.jpg"
                alt="Guest House"
                width={350}
                height={500}
                objectFit="cover"
              />
              <div className={styles.intro}>
                <h1 className={styles.title}>Bai Mile</h1>
                <p className={styles.subtitle}>Guest House</p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.image}
                src="/ivan-ivanov3.jpg"
                alt="Downtown"
                width={350}
                height={500}
                objectFit="cover"
              />
              <div className={styles.intro}>
                <h1 className={styles.title}>Ivan Ivanov</h1>
                <div>
                  <p className={styles.subtitle}>
                    Downtown is 10min away walking
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.text_section}>
            <div className={styles.name}>Guest House</div>
            <div className={styles.description}>
              A comfortable Stay At An Affordable Price
            </div>
            <div className={styles.centerbtn}>
              <button className={styles.btn}>
                <NavItem text="Book Now" href="/contact" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
