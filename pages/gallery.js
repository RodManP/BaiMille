import Layout from "../components/layout/Layout";
import styles from "../styles/gallery.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavItem from "../components/layout/NavItem";

export default function Reservations() {
  const gallery = [
    {
      id: 0,
      alt: "",
      src: "/images/twoBed3.jpg",
      title: "Стая",
      description: " с две легла",
    },
    {
      id: 1,
      alt: "",
      src: "/images/onebed1.jpg",
      title: "Стая",
      description: "със спалня",
    },
    {
      id: 2,
      alt: "",
      src: "/images/bath2.jpg",
      title: "Баня",
      description: "Баня със санитарен възел",
    },
    {
      id: 3,
      alt: "",
      src: "/images/onebed2.jpg",
      title: "Стая",
      description: "с едно легло",
    },
    {
      id: 4,
      alt: "",
      src: "/images/restaurant2.jpg",
      title: "Механа",
      description: "в къщата",
    },
    {
      id: 5,
      alt: "",
      src: "/images/two_level1.jpg",
      title: "Стая",
      description: "на два етажа",
    },
    {
      id: 6,
      alt: "",
      src: "/images/sauna2.jpg",
      title: "Сауна",
      description: "Парна сауна",
    },
    {
      id: 7,
      alt: "",
      src: "/images/barbacue2.jpg",
      title: "Барбекю",
      description: "Барбекю на дърва",
    },
  ];

  const len = gallery.length - 1;
  let stylo = styles.card;

  const [activeIndex, setActiveIndex] = useState(0);
  const [cambia, setCambia] = useState(styles.card);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      setCambia(styles.card_cambia);
    }, 4000);
    return () => {
      clearInterval(interval);
      setCambia(styles.card);
    };
  }, [activeIndex, len]);

  return (
    <Layout title="Bai Mille Gallery">
      <main className={styles.main}>
        {/* <div className={styles.header}>Gallery</div> */}

        {/* Container */}
        <div className={styles.container}>
          {/* Images section */}
          <div className={styles.images_section}>
            <div className={cambia}>
              <div className={styles.card_image}>
                <Image
                  className={styles.image}
                  priority
                  src={gallery[activeIndex].src}
                  alt="Bansko"
                  layout="responsive"
                  objectFit="cover"
                  width={70}
                  height={70}
                />
              </div>
              <div className={styles.title}>{gallery[activeIndex].title}</div>
              <div className={styles.description}>
                {gallery[activeIndex].description}
              </div>
            </div>
          </div>

          {/* Text section */}
          <div className={styles.text_section}>
            <div className={styles.text_card}>
              <h2>Удобства:</h2>
              <div className={styles.services}>
                <ul>
                  <li>едно, две или три легла</li>
                  <li>Собствен санитарен възел</li>
                  <li>Безплатен Wifi</li>
                  <li>Стаи на два етажа</li>
                  <li>Отопление</li>
                  <li>Телевизия</li>
                </ul>
              </div>
              <div className={styles.other_services}>
                <h2>Други услуги (по заявка на клиента):</h2>
                <ul>
                  <li>Сауна</li>
                  <li>Организиране на барбекю за групи и семейства</li>
                  <li>закуска, обяд и/или вечеря</li>
                </ul>
              </div>
              <div className={styles.centerbtn}>
                <button className={styles.btn}>
                  <NavItem text="Резервирай сега" href="/contact" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
