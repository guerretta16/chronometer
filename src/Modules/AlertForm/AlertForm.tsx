import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormType, Time } from "../../utils/types";
import styles from "./alertForm.module.css";

interface AlertFormState {
  onSubmit: SubmitHandler<FormType>
  alert: Time | undefined
}

const AlertForm = ({onSubmit, alert}: AlertFormState) => {

  const { register, formState: { errors, isSubmitSuccessful }, handleSubmit, reset} = useForm<FormType>();

  useEffect(() => {
    reset()
  }, [isSubmitSuccessful])
  

  return (
    <motion.div
      className={styles.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        type: "just",
        delay: 0.5
      }}
    >
      <div className={styles.info}>
        <h2>Configure your alert</h2>
        <small>Choose the specific time for your alert!!!</small>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formControl}>
          <input className={styles.input} {...register("hour", {required: true, maxLength:2})} placeholder="Hours"/>
          {errors.hour && <span className={styles.error}>Required & just 1 digits!</span>}
        </div>
        <div className={styles.formControl}>
          <input className={styles.input} {...register("minute", {required: true, maxLength:2})} placeholder="Minutes"/>
          {errors.hour && <span className={styles.error}>Required & just 1 digits!</span>}
        </div>
        <div className={styles.formControl}>
          <input className={styles.input} {...register("second", {required: true, maxLength:2})} placeholder="Seconds"/>
          {errors.hour && <span className={styles.error}>Required & just 1 digits!</span>}
        </div>
        <input className={styles.button} type="submit"/>
      </form>
      {
        typeof(alert) !== "undefined" && (
          <div className={styles.resume}>
            <p>Your alarm: </p>
            <span>
              {alert?.h < 10 ? '0' + alert?.h : alert?.h} : 
              {alert?.m < 10 ? '0' + alert?.m : alert?.m} : 
              {alert?.s < 10 ? '0' + alert?.s : alert?.s}
            </span>
          </div>
        )
      }
    </motion.div>
  )
}

export default AlertForm;