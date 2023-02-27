import { motion } from 'framer-motion';
import styles from './buttons.module.css';

interface ButtonState {
  toggleOption: () => void
  toggle: boolean
  restartChronometer: () => void
}

const Buttons = ({toggleOption, toggle, restartChronometer}:ButtonState) => {
  return (
    <motion.div
      className={styles.container}
      initial={{x: - 1000}}
      animate={{x: 0}}
      transition={{
        delay: 0.5,
        duration: 1,
        type: 'spring',
        stiffness: 50
      }}
    >
      <button className={styles.button} onClick={toggleOption}>
        {toggle?'Stop':'Start'}
      </button>
      <button className={styles.button} onClick={restartChronometer}>Restart</button>
    </motion.div>
  )
}

export default Buttons;