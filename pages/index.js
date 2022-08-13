import Layout from "../components/layout/Layout";
import styles from "../styles/home.module.css"
import Image from "next/image";
import NavItem from "../components/layout/NavItem";

export default function Home() {
  return (
    <Layout title="Къща за гости Страковата Къща">
      <main className={styles.body}>
        <div className={styles.container}>
          <div className={styles.card_section}>
            <div className={styles.card}>
              <Image
                className={styles.image}
                src="/images/bansko.jpg"
                alt="Банско"
                width={350}
                height={500}
                objectFit="cover"
              />
              <div className={styles.intro}>
                <h1 className={styles.title}>Банско</h1>
                <p className={styles.subtitle}>
                  Български ски курорт <br></br> Лифта е на 10 минути пеша
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
                <h1 className={styles.title}>Страковата къща</h1>
                <p className={styles.subtitle}>Къща за гости</p>
              </div>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.image}
                src="/images/ivan-ivanov3.jpg"
                alt="Downtown"
                width={350}
                height={500}
                objectFit="cover"
              />
              <div className={styles.intro}>
                <h1 className={styles.title}>Иван Иванов</h1>
                <div>
                  <p className={styles.subtitle}>
                    Центъра е на 10 минути пеша
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.text_section}>
            <div className={styles.name}>Къща за гости</div>
            <div className={styles.description}>
              Приятна почивка на приемлива цена
            </div>
            <div className={styles.centerbtn}>
              <button className={styles.btn}>
                <NavItem text="Направи резервация" href="/contact" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
