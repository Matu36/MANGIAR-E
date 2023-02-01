import React from "react";
import s from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
 
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return <div className={s.container}>
    <h3 onClick={handleClick}>MANGIAR-E</h3>
    <button onClick={handleClick}>HOME</button>
  </div>;
}

export default NavBar;
