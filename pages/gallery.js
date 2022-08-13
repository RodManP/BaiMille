import Layout from "../components/layout/Layout";
import styles from "../styles/gallery.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavItem from "../components/layout/NavItem";

export default function Reservations() {
  const gallery = [
    {
      id: 0,
      alt: "",
      src: "/images/twoBed3.jpg",
      title: "room",
      description: "two beds",
    },
    {
      id: 1,
      alt: "",
      src: "/images/onebed1.jpg",
      title: "room",
      description: "comfortable wide bedrooms",
    },
    {
      id: 2,
      alt: "",
      src: "/images/bath2.jpg",
      title: "bathroom",
      description: "bathrooms with ammenities",
    },
    {
      id: 3,
      alt: "",
      src: "/images/onebed2.jpg",
      title: "room",
      description: "one bed",
    },
    {
      id: 4,
      alt: "",
      src: "/images/restaurant2.jpg",
      title: "Restaurant",
      description: "in site restaurant",
    },
    {
      id: 5,
      alt: "",
      src: "/images/two_level1.jpg",
      title: "Room",
      description: "Two level room",
    },
    {
      id: 6,
      alt: "",
      src: "/images/sauna2.jpg",
      title: "Sauna",
      description: "sauna room",
    },
    {
      id: 7,
      alt: "",
      src: "/images/barbacue2.jpg",
      title: "Barbacue",
      description: "barbacue spot",
    },
  ];

  const len = gallery.length - 1;
  let stylo = styles.card

  const [activeIndex, setActiveIndex] = useState(0);
  const [cambia, setCambia] = useState(styles.card);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      setCambia(styles.card_cambia) ;
    }, 4000);
    return () => {clearInterval(interval);
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
              <h2>Services</h2>
              <div className={styles.services}>
                <ul>
                  <li>one, two or three beds</li>
                  <li>Own bathroom</li>
                  <li>Free Wifi</li>
                  <li>two level rooms</li>
                  <li>heating</li>
                  <li>Tv</li>
                </ul>
              </div>
              <div className={styles.other_services}>
                <h2>Other services</h2>
                <ul>
                  <li>Sauna</li>
                  <li>Can organize barbacue for groups or families</li>
                  <li>breakfast, lunch or dinner as requested by customer</li>
                </ul>
              </div>
              <div className={styles.centerbtn}>
                <button className={styles.btn}>
                  <NavItem text="Book Now" href="/contact" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <button>
          <Link href={"/"}>
            <a>
              <h2>Book</h2>
            </a>
          </Link>
        </button> */}
      </main>
    </Layout>
  );
}
