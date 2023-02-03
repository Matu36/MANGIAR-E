import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValuesIngredients } from "../../Redux/actions/index.js";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    // dispatch( "" (e.target.value));
    setSearch(e.target.value);
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

  const ingredientsValues = useSelector(
    (state) => state.searchValuesIngredients
  );
  console.log(ingredientsValues);
  const handleSearchByIngredients = (event) => {
    if (event.keyCode === 13)
      dispatch(setSearchValuesIngredients(event.target.value));
  };

  return (
    <nav className="searchNavBar">
      <form className onSubmit={handleOnClick}>
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
