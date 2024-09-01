import styles from "./Input.module.css"

// eslint-disable-next-line react/prop-types
function Input({inputLabel, inputName, inputPlaceholder}) {
  return (
    <div className={styles.ctInput}>
        <label htmlFor={inputName}>{inputLabel}</label>
        <input type="text" name={inputName} placeholder={inputPlaceholder} className={styles.input}/>
    </div>
  )
}

export default Input