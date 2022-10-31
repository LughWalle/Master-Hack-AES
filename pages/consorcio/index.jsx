import React, { useState } from "react";
import Modal from "../../components/Modal";
import styles from "./styles.module.scss";

const Consorcio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Modal />
      </div>
    </div>
  );
};

export default Consorcio;
