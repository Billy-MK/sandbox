import React from 'react';
import styles from "./Modal.module.css"

const Modal = (props) => {

    const testFunction = () => {
        props.closeModal();
    }
    
    return (
        <div className={styles.modal}>
            <div className={styles.backdrop} onClick={testFunction}></div>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    {props.header}
                </div>
                <div className={styles.modalBody}>
                    {props.body}
                </div>
            </div>
        </div>
    )
}

export default Modal