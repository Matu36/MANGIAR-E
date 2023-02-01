import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import style from "../LandingPage/LandingPage.module.css";
import { NavLink } from "react-router-dom";

export default function LandingPage () {
    
        
      
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
    let handleSubmit = (e) => {
        e.preventDefault();
        setInput ({Usuario: "", Contraseña: ""})
    
    }

return (

<div className= {style.container}>
   <h1 className= {style.tittle}>MANGIAR-E</h1>

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
<h3>Inicio de Sesión</h3>
<form onSubmit={(e) => handleSubmit(e)}>
<label> Usuario </label>
<input type={"text"} name = {"Usuario"} value = {input.Usuario} 
onChange= {(e) => letHandleOnChange (e)}/> 
<label> Contraseña </label>
<input type={"password"} name = {"Contraseña"} value = {input.Contraseña} 
onChange= {(e) => letHandleOnChange (e)}/> 

<br/>
<br/>

<input type={"submit"} value = {"Ingresar"}/>

</form>

<h4>
<NavLink to = {"/formUser"}>Registrarse aquí</NavLink>
</h4>

</div>
)
}
