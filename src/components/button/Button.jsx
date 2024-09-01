import styles from "./Button.module.css"

// eslint-disable-next-line react/prop-types
function Button({children, type}) {
  return (
    <button type={type} className={styles.ctButton}>
        {children}
    </button>
  )
}

export default Button