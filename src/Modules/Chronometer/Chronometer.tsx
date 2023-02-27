import styles from './chronometer.module.css';
import { Time } from '../../utils/types';
import { motion } from "framer-motion"

interface ChronometerState{
  time: Time
}

const Chronometer = ({time}:ChronometerState) => {
  return (
    <motion.div 
      className={styles.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        delay: 0.5,
        duration: 2.0
      }}
    >
      <span className={styles.number}>{time.h < 10 ? '0'+time.h : time.h}</span><span className={styles.sep}>:</span>
      <span className={styles.number}>{time.m < 10 ? '0'+time.m : time.m}</span><span className={styles.sep}>:</span>
      <span className={styles.number}>{time.s < 10 ? '0'+time.s : time.s}</span><span className={styles.sep}>:</span>
      <span className={styles.number}>{time.ms < 10 ? '0'+time.ms : time.ms}</span>
    </motion.div>
  );
};

export default Chronometer;
