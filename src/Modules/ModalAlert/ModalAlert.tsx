import { Dispatch } from "react";
import styles from "./modalAlert.module.css";
import { motion } from "framer-motion";

interface ModalState {
  changeModal: () => void;
}

const ModalAlert = ({ changeModal }: ModalState) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        delay: 0.3,
      }}
    >
      <motion.div
        className={styles.alert}
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          delay: 0.3,
        }}
      >
        <div className={styles.header}>
          <span onClick={changeModal} className={styles.circle}>
            x
          </span>
        </div>
        <div className={styles.body}>
          <motion.p
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >Your alarm is active!!!</motion.p>
          <small>Please, press the X button.</small>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalAlert;
