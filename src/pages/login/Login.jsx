import Button from "../../components/button/Button"
import Input from "../../components/input/Input"
import Navbar from "../../components/navbar/Navbar"
import styles from "./Login.module.css"

function Login() {
  return (
    <>
    <Navbar/>
    <div className={styles.ctForm}>
      <h2>Log-in</h2>
      <form action="" className={styles.form}>
        <Input inputLabel="Usuario" inputName="user" inputPlaceholder="Escribe tu nombre de usuario..."/>
        <Input inputLabel="Contraseña" inputName="pass" inputPlaceholder="Escribe tu contraseña..."/>
        <div className={styles.ctButtons}>
          <Button type="reset">Cancelar</Button>
          <Button type="submit">Acceder</Button>
        </div>
      </form>
    </div>
    </>
    
  )
}

export default Login