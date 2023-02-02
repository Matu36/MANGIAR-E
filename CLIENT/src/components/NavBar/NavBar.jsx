import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";


function NavBar() {
  
  return (
    <div className={s.container}>
      <NavLink to = {"/home"}>HOME</NavLink>
    </div>
  );
}

export default NavBar;
