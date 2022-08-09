import Layout from "../components/layout/Layout";
import styles from "../styles/contact.module.css";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineHotel } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineHttp } from "react-icons/md";

const MAPBOX_TOKEN = ""; // Set your mapbox token here

export default function Contact() {

  return (
    <Layout title="Bai Mille Contact">
      <main className={styles.main}>
        <div className={styles.map_section}>
          <div className={styles.map}>
            <Map
              initialViewState={{
                latitude: 41.82846816866241,
                longitude: 23.486055899802754,
                zoom: 15,
              }}
              style={{ width: 500, height: 500 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={
                "pk.eyJ1IjoibWFudWVscm9kIiwiYSI6ImNrd2F2dGQ1bjhhNjkydW10NnduNDN3dmwifQ.1SUuwaJHDVUS0fSDP0xuHA"
              }
            >
              <Marker
                longitude={23.486055899802754}
                latitude={41.82846816866241}
                color="red"
              />
            </Map>
          </div>
        </div>
        <div className={styles.contact_section}>
          <h1>Contact</h1>
          <div className={styles.contact}>
            <div className={styles.icons}>
              <div className={styles.icon_hotel} >
                address
              </div>
              <div className={styles.icon_web}>
                {/* <MdOutlineHttp className={styles.icon.web} /> */}
                web page
              </div>
              <div>
                <BsTelephone className={styles.icon_tel} />
                <FaWhatsapp className={styles.icon_whatsapp} />
              </div>
              <div>
                <MdOutlineEmail className={styles.icon_email} />
              </div>
            </div>

            <div className={styles.info}>
              <div className={styles.address}>
                ul. Tsar Ivan Asen II-ri 20, 1124 кв. Новия град, Bansko,
                Bulgaria
              </div>
              <div className={styles.address_two}>
                ул. „Цар Иван Асен II-ри“ 20, 1124 кв. Новия град, Банско
              </div>
              <div className={styles.city}>RFHP+9C Bansko, Bulgaria</div>
              <div className={styles.web}>http://www.strakova-kashta.com/</div>
              <div className={styles.tel}>+35974982502</div>
              <div className={styles.email}>email</div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
