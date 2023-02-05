import React from "react";
import style from "./LoginForm.module.css";
import { Link } from "react-router-dom";


const LoginForm = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    setInput({ Usuario: "", Contraseña: "" });
  };

  let [input, setInput] = React.useState({
    Usuario: "",
    Contraseña: "",
  });

  let letHandleOnChange = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={style.container}>
      <div className={style.iniciosesion}>
        <h3>Inicio de Sesión</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label> Usuario </label>
          <input
            type={"text"}
            name={"Usuario"}
            value={input.Usuario}
            onChange={(e) => letHandleOnChange(e)}
          />
          <br />
          <label> Contraseña </label>
          <input
            type={"password"}
            name={"Contraseña"}
            value={input.Contraseña}
            onChange={(e) => letHandleOnChange(e)}
          />
          <br />
          <input type={"submit"} value={"Ingresar"} />
          <br />
          <br />
        </form>
      </div>
      <div className={style.button}>
        <Link to={"/formUser"}>
          <button className={style.register}>Registrarse aquí</button>
        </Link>
        <br />

        <Link to={"/home"}>
          <button className={style.register1}>Ingresar como Invitado</button>
        </Link>

        <br />
      </div>
    </div>
  );
};

export default LoginForm;
