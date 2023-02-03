import React, { useState } from "react";
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { getRecipes } from "../../Redux/actions";

export default function SearchBar() {
  const [search, setSearch] = useState("");
const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
   //dispatch(getRecipes(e.target.value));
    setSearch(e.target.value)
=======
import { useDispatch, useSelector } from "react-redux";
import { setSearchValuesIngredients } from "../../Redux/actions/index.js";
import { input } from "react-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    // dispatch( "" (e.target.value));
    setSearch(e.target.value);
>>>>>>> 9b72bb0411d0e9eee4fa0ef7332105eb0c91e9a1
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Ingresar nombre de la receta");
    } else {
      dispatch(getRecipes(search));
      setSearch("");
    }
  };

  const ingredientsValues = useSelector(
    (state) => state.searchValuesIngredients
  );
  console.log(ingredientsValues);
  const handleSearchByIngredients = (event) => {
    if (event.keyCode === 13)
      dispatch(setSearchValuesIngredients(event.target.value));
  };

  return (
<<<<<<< HEAD
  
    <div>
      <form className="search" onSubmit={handleOnClick}>
=======
    <nav className="searchNavBar">
      <form className onSubmit={handleOnClick}>
>>>>>>> 9b72bb0411d0e9eee4fa0ef7332105eb0c91e9a1
        <input
          type="text"
          placeholder="Buscar Receta"
          onChange={handleOnChange}
          value={search}
          autoComplete="off"
        />
      </form>

      <h1>Filters</h1>

      <input
        className="searchbaringredients"
        type="text"
        placeholder="Search by ingredients"
        onKeyUp={handleSearchByIngredients}
      />
      {ingredientsValues
        ? ingredientsValues.map((ingredient, index) => {
            return (
              <div key={index}>
                {ingredient}
                <button>x</button>
              </div>
            );
          })
        : null}
      <br></br>

      <hr></hr>
    </nav>
  );
}
