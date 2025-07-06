import React from "react";
import styles from "./modal.module.css";

const Modal = ({ onClose, title, children }) => {

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-box']}>
        <div className={styles['modal-header']}>
          <h2>{title}</h2>
          <button onClick={onClose} className="modal-close">&times;</button>
        </div>
        <div className={styles['modal-body']}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
