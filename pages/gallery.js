import Layout from "../components/layout/Layout";
import styles from "../styles/gallery.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Reservations() {

  
const [indice, setIndice] = useState(1)

const calculaIndice = () => {
  clearInterval(myInterval);
  if(indice === 5){
    setIndice(1)
  }else{
    setIndice(indice + 1)

  }
  clearInterval(myInterval);
  return 
}

const myInterval = setInterval(() => {
   
    calculaIndice()
    console.log('en intervalo');
    
  },4000)

  console.log('indice::',indice);

  const gallery = [{
    id: 1,
    alt: "",
    src: "/images/bansko2.jpg",
    title: "ammenities",
    description: "Every room served with own set of ammenities"
  },
  {
    id: 2,
    alt: "",
    src: "/bansko.jpg",
    title: "Home",
    description: "Two beds"
  },
  {
    id: 3,
    alt: "",
    src: "/ivan-ivanov.jpg",
    title: "Home",
    description: ""
  },
  {
    id: 4,
    alt: "",
    src: "/resizedkristin.jpg",
    title: "Home",
    description: ""
  },
  {
    id: 5,
    alt: "",
    src: "/bansko.jpg",
    title: "Home",
    description: ""
  }, {
    id: 6,
    alt: "",
    src: "/resizedkristin.jpg",
    title: "Home",
    description: ""
  
  }, {
    id: 7,
    alt: "",
    src: "/images/bansko2.jpg",
    title: "Home",
    description: ""
  },
]
console.log(gallery[0].src);



  return (
    <Layout title="Bai Mille Gallery">
      <main className={styles.main}>
        {/* <div className={styles.header}>Gallery</div> */}

        {/* Container */}
        <div className={styles.container}>
          {/* Images section */}
          <div className={styles.images_section}>
            <div className={styles.card}>
              <div className={styles.card_image}>
                <Image
                  className={styles.image}
                  priority
                  src={gallery[indice].src}
                  alt="Bansko"
                  layout="responsive"
                  objectFit="cover"
                  width={70}
                  height={70}
                />
              </div>
              <div className={styles.title}>{gallery[indice].title}</div>
              <div className={styles.description}>{gallery[indice].description}</div>
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
                  {/* <li>item e</li> */}
                </ul>
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
