import React from "react";
import styles from "./styles.module.scss";
import Ael from "../../asserts/Ael.svg";
import cx from 'classnames';
import Image from "next/image";

const Nos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.hero}>
      <Image className={styles.imgHero} src={Ael} />
      </div>
        <section className={styles.section}>
          <div className={styles.card}>
            <p>
              Somos uma startup responsável pela gestão de energia que será
              gerada pela AES e distribuída e implementada pela
              distribuidora local.
            </p>
          </div>
          <div className={cx(styles.card, styles.right)}>
            <p className={styles.title}>NOSSO OBJETIVO</p>
            <p>
              De forma a facilitar o processo de adesão de tarifas energéticas
              mais baratas com uma maior segurança, tranquilidade e menor
              burocracia. Sendo uma ponte entre o consumidor final (que pode ser
              industrias, comunidades, condomínios e residências).
            </p>
          </div>
          <div className={styles.card}>
            <p className={styles.title}>COMO</p>
            <p>
              A partir da união de empresas com diferentes tarifas energéticas,
              de forma a facilitar a adesão de energia pelo Mercado Livre de
              Energia. O que será feito através de consórcios firmados para a
              aquisição de uma energia mais barata.
            </p>
          </div>
          <div className={cx(styles.card, styles.right)}>
            <p className={styles.title}>POR QUE?</p>
            <p>
              Devido a alta cada vez maior nas tarifas energéticas
              convencionais, há uma busca pela redução do custo destas, porém há
              um grande receio para a contratação de serviços não convencionais,
              o que é agravado pela pouca divulgação das mesmas, e ainda é
              atrelado com a dificuldade de adesão energética em
              algumas localidades.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nos;
