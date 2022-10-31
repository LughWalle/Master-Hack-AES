import React from "react";
import styles from "./styles.module.scss";
import Ael from "../../asserts/Ael.svg";
import Lamp from "../../asserts/lamp.png";
import Radio from "../../asserts/radio.png";
import LampAndBook from "../../asserts/lampAndBook.png";
import cx from "classnames";
import Image from "next/image";

const projetos = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <Image className={styles.imgHero} src={Ael} />
        </div>
        <section className={styles.section}>
          <h1 className={styles.titulo}>Levando energia para todos</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image src={Lamp} />
              <p className={styles.right}>
                Levar energia para todos é nosso maior objetivo e foi a base de
                construção de nossa empresa.
              </p>
            </div>
            <div className={styles.card}>
              <p>
                Com o objetivo inicial de reduzir custos para as industrias, e a
                partir de 2028, focando na iniciativa da Aneel para este ano,
                pretendemos levar o Mercado Livre de Energia a outro Patamar.
              </p>
              <Image src={Radio} />
            </div>
            <div className={styles.card}>
              <Image src={LampAndBook} />
              <p className={styles.right}>
                Levar energia para todos, melhora a qualidade da educação,
                facilita iniciativa e o desenvolvimento da região, além de
                trazer diversas vantagens, como a melhoria do manejo agricula e
                familiar, e a possibilidade do uso de soluções mais eficazes
                para o tratamento de agua, como ionizadores utilizados no
                tratamento de cisternas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default projetos;
