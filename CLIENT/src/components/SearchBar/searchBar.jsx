import React, { useState } from "react";
//import { useDispatch } from "react-redux";
//import {  } from "../../actions/index";


export default function SearchBar() {
  const [search, setSearch] = useState("");
  //const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    // dispatch( "" (e.target.value));
    setSearch(e.target.value)
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Ingresar nombre de la receta");
    } else {
      //dispatch(""(search));
      setSearch("");
    }
  };

  return (
  
    <div>
      <form className onSubmit={handleOnClick}>
        <input
          type="text"
          placeholder="Buscar Receta"
          onChange={handleOnChange}
          value={search}
          autoComplete="off"
        />
      </form>
    </div>
  );
}