import Image from "next/image";
import styles from "../styles/Home.module.scss";
import AesMaisAel from "../asserts/AesMaisAel.svg";
import Ael from "../asserts/Ael.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slide1 from "../asserts/slide1.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <Image className={styles.imgHero} src={Ael} />
          <Carousel centerMode={true} className={styles.carousel}>
            <div className={styles.slide}>
              <Image src={Slide1} />
            </div>
            <div className={styles.slide}>
              <Image src={Slide1} />
            </div>
            <div className={styles.slide}>
              <Image src={Slide1} />
            </div>
          </Carousel>
        </div>
        <section className={styles.section}>
          <div className={styles.card}>
            <p>
              Somos uma Startup responsavél por levar energia barata e de
              qualidade até você.
            </p>

            <p>
              Em parceria com a AES e com distribuidoras locais, trazemos
              facilidade em todo o processo enegético.
            </p>
          </div>
          <Image className={styles.AesMaisAel} src={AesMaisAel} />
        </section>
      </div>
    </div>
  );
}
