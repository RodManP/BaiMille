import Layout from "../components/layout/Layout";
import styles from "../styles/contact.module.css";


export default function Contact() {
  return (
    <Layout title="Bai Mille Contact">
      
      <main className={styles.main}>
        <div className={styles.map_section}>
          <div className={styles.map}>mapa</div>
        </div>
        <div className={styles.contact_section}>
          <div className={styles.contact}>
            <h1>Contact</h1>

            <div className={styles.address}>
              ul. "Tsar Ivan Asen II-ri" 20, 1124 кв. Новия град, Bansko,
              Bulgaria
            </div>
            <div className={styles.address_two}>
              ул. „Цар Иван Асен II-ри“ 20, 1124 кв. Новия град, Банско
            </div>
            <div className={styles.web}>http://www.strakova-kashta.com/</div>
            <div className={styles.tel}>+35974982502</div>
            <div className={styles.city}>RFHP+9C Bansko, Bulgaria</div>
            <div>41°49'42.4"N 23°29'09.9"E</div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
