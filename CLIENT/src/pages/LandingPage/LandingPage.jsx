import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";
//import { useState } from "react";
//import { validate } from "../../utils/validations";

export default function LandingPage () {
    
  //const [errors, setErrors] = useState({});

      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '250px',
        
      }

    const slideImages = [
        {
          url: 'https://www.lasaltena.com.ar/wp-content/uploads/2020/02/recetaSlider2-1349x675.jpg.webp',
          caption: 'Slide 1'
        },
        {
          url: 'https://www.annarecetasfaciles.com/files/pollo-asado-cava-1536x862.jpg',
          caption: 'Slide 2'
        },
        {
          url: 'https://www.paulinacocina.net/wp-content/uploads/2014/08/P1100479.jpg',
          caption: 'Slide 3'
        },
      ];

    let [input, setInput] = React.useState ({
        Usuario: "",
        Contraseña: ""
    })

    let letHandleOnChange = (e) => {
        e.preventDefault();
        setInput ((prev) => ({...prev, [e.target.name] : e.target.value}))
    }

//setErrors (
  //validate ({
    //Usuario: input.Usuario,
    //Contraseña: input.Contraseña,
  //})

//)

    let handleSubmit = (e) => {
        e.preventDefault();
        setInput ({Usuario: "", Contraseña: ""})
    
    }

return (

<div className= {style.container}>
<div className= {style.divTitle}>
<h1 className= {style.tittle}>MANGIAR-E</h1>
</div>
<div className= {style.containerslydeYregistro}>
   <div className= {style.iniciosesionmasbotones}>
   <div className= {style.iniciosesion}>
<h3>Inicio de Sesión</h3>
<form onSubmit={(e) => handleSubmit(e)}>
<label> Usuario </label>
<input type={"text"} name = {"Usuario"} value = {input.Usuario} 
onChange= {(e) => letHandleOnChange (e)}/> 
<br />
<label> Contraseña </label>
<input type={"password"} name = {"Contraseña"} value = {input.Contraseña} 
onChange= {(e) => letHandleOnChange (e)}/> 
<br />
<input type={"submit"} value = {"Ingresar"}/>
<br/>
<br/>

</form>
</div>
<div className= {style.button}>
<Link to = {"/formUser"}>
<button className= {style.register}>Registrarse aquí</button>
</Link>
<br />

<Link to = {"/home"}>
<button className= {style.register1}>Ingresar como Invitado</button>
</Link>

<br />
</div>
</div>
 <div className= {style.slide}>
 <Slide>
         {slideImages.map((slideImage, index)=> (
           <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
    </Slide>
   </div>
          </div>
<div className= {style.colaborators}>

<h4>Colaboradores</h4>
</div>

</div>

)
}
