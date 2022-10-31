import React, { useState } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Modal = ({ className, modalRef }) => {
  useState;
  return (
    <div ref={modalRef} className={cx(styles[className], styles.modal)}>
      <h1>Cadastr-se em nosso consórcio</h1>
      <form className={styles.form}>
        <p>Levando energia com taxas reduzidas e sem burocracia</p>
        <label className={styles.labelInput} htmlFor="">
          Nome completo
          <input className={styles.input} type="text" name="" id="" />
        </label>
        <label className={styles.labelInput} htmlFor="">
          Email
          <input className={styles.input} type="text" name="" id="" />
        </label>
        <label className={styles.labelInput} htmlFor="">
          Telefone (opcional)
          <input className={styles.input} type="text" name="" id="" />
        </label>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          Li e entendi o Termo de uso e Política de Privacidade
        </label>
        <label htmlFor="">
          <input type="checkbox" name="" id="" />
          Consinto com a coleta e tratamento de dados pessoais efetuados pela
          AES BRasil para fins de cadastro e entendo que o consentimento é
          condição para realização da simulação
        </label>
        <Link href='/part-2' className={styles.btn} type="submit">Avançar</Link>
      </form>
    </div>
  );
};

export default Modal;
