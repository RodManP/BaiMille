import Layout from "../components/layout/Layout";
import styles from "../styles/contact.module.css";

import Map, { Marker, NavigationControl, ScaleControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineHotel } from "react-icons/md";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineHttp } from "react-icons/md";

const MAPBOX_TOKEN = ""; // Set your mapbox token here

export default function Contact() {
  return (
    <Layout title="Bai Mille Contact">
      <main className={styles.main}>
        {/* comienza seccion info */}
        <div className={styles.contact_section}>
          <h1>Contact</h1>
          <div className={styles.contact}>
            <div className={styles.full_address}>
              <div className={styles.icon_address}>address</div>
              <div className={styles.address}>
                ул. „Цар Иван Асен II-ри“ 20, 1124 кв. Новия град, Банско
              </div>
            </div>
            <div>
              <div className={styles.icon_web}>web page</div>
              <div className={styles.web}>http://www.strakova-kashta.com/</div>
            </div>
            <div className={styles.icons}>
              <BsTelephone className={styles.icon_tel} />
              <FaWhatsapp className={styles.icon_whatsapp} />
              <FaViber className={styles.icon_viber} />
            </div>
            <div className={styles.tel}>+359898598400</div>
          </div>
        </div>

        <div>
          <MdOutlineEmail className={styles.icon_email} />
          <div className={styles.email}>mihail.strakov@gmail.com</div>
        </div>

        <div className={styles.map_section}>
          <div className={styles.map}>
            <Map
              initialViewState={{
                latitude: 41.82846816866241,
                longitude: 23.486055899802754,
                zoom: 15,
              }}
              style={{ width: 375, height: 400 }}
              priority
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken={
                "pk.eyJ1IjoibWFudWVscm9kIiwiYSI6ImNrd2F2dGQ1bjhhNjkydW10NnduNDN3dmwifQ.1SUuwaJHDVUS0fSDP0xuHA"
              }
            >
              <NavigationControl position="top-left" showCompass="true" />
              <ScaleControl />
              <Marker
                longitude={23.486055899802754}
                latitude={41.82846816866241}
                color="red"
              />
            </Map>
          </div>
        </div>
      </main>
    </Layout>
  );
}
