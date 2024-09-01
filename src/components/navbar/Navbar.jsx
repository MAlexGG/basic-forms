import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <header className={styles.header}>
        <Link to={'/'}>Home</Link>
        <Link to={'/sign-in'}>Sign-in</Link>
        <Link to={'/log-in'}>Log-in</Link>
    </header>
  )
}

export default Navbar