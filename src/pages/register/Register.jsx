import Button from "../../components/button/Button"
import Input from "../../components/input/Input"
import Navbar from "../../components/navbar/Navbar"
import styles from "./Register.module.css"


function Register() {
  return (
    <>
    <Navbar/>
    <div className={styles.ctForm}>
      <h2>Sign-in</h2>
      <form action="" className={styles.form}>
        <Input inputLabel="Usuario" inputName="user" inputPlaceholder="Escribe tu nombre de usuario..."/>
        <Input inputLabel="Contraseña" inputName="pass" inputPlaceholder="Escribe tu contraseña..."/>
        <Input inputLabel="E-mail" inputName="mail" inputPlaceholder="Escribe tu mail..."/>
        <div className={styles.ctButtons}>
          <Button type="reset">Cancelar</Button>
          <Button type="submit">Registrar</Button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Register