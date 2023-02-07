import React from "react";
import s from "./NavBar.module.css";
import { Link } from "react-router-dom";


function NavBar() {
  
  return (
    <div className= {s.container}>
    
    <Link to = {"/home"}>
    <button className= {s.btn1}>HOME</button>
   </Link>
<<<<<<< HEAD
   <Link to = {"/createRecipe"}>
    <button className= {s.btn1}>CREATE YOUR OWN RECIPE</button>
   </Link>
   <Link to = {"/myRecipes"}>

=======
   <Link to = {"/home"}>
    <button className= {s.btn1}>CREATE YOUR OWN RECIPE</button>
   </Link>
   <Link to = {"/home"}>
>>>>>>> ed081fdef058f708c271b63f873185c0f79a4c6c
    <button className= {s.btn1}>My recipes</button>
   </Link>
   <Link to = {"/aboutUs"}>
    <button className= {s.btn1}>About us</button>
   </Link>
   <Link to = {"/contact"}>
    <button className= {s.btn1}>Contact</button>
   </Link>
      </div>

  );
}

export default NavBar;
