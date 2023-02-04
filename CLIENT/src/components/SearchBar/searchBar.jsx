import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValuesIngredients } from "../../Redux/actions/index.js";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
//import { getRecipes } from "../../Redux/actions/index.js";
//import { input } from "react-dom";

export default function SearchBar() {
  //const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const recipes =  useSelector((state) => state.recipes);

  const mapRecipes = recipes.map((r) => {
    return {name:r.title}
});


  
  const handleOnSearch = (string, results) => {
  console.log(string, results)
  }

  const handleOnHover = (result) => {
    console.log(result)
  }

  const handleOnSelect = (item) => {
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  //const handleOnChange = (e) => {
    //e.preventDefault();
    // dispatch( "" (e.target.value));
   // setSearch(e.target.value);
  //};

  //const handleOnClick = (e) => {
   // e.preventDefault();

   /* if (!search) {
      alert("Ingresar nombre de la receta");
    } else {
      dispatch(getRecipes(search));
      setSearch("");
    }
  };
*/

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
      <div className="sBar">
      <header className="sBar-header">
        <h2> Buscar Recetas </h2>
        <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
            items = {mapRecipes}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
          </div>
        </header>
    
        </div>

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
