import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeIdAutocomplete, setSearchValueName } from "../../Redux/actions/index.js";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { filterByDiet, setOrderBy } from "../../Redux/actions/index.js";
import Select from 'react-select';


export default function SearchBar() {
  const dispatch = useDispatch();
  const recipes =  useSelector((state) => state.recipes);
  const diets =  useSelector((state) => state.diets);
  const orderBy = useSelector((state) => state.orderBy);
  const recipeDetailIdAutocomplete = useSelector((state) => state.recipeIdAutocomplete);

  console.log (recipeDetailIdAutocomplete)

  const mapRecipes = recipes.map((r) => {
    return {name: r.title,
    id: r.id,
    img: r.image,
    diet: r.diets,
    
}
});

  const handleOnSearch = (string, results) => {
  console.log(string, results)
  }

  const handleOnHover = (result) => {
    console.log(result)
  }

  const handleOnSelect = (item) => {
    dispatch (setRecipeIdAutocomplete(item.id))
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  const handleSearch = (event) => {
    dispatch(setSearchValueName(event.target.value));
  };

  const handleFilterbyDiet = (event) => {
    dispatch(filterByDiet(event.target.value));
  };

  const orderSelectByAlphabetical = [
    {label: '', value: ''},
    {label: 'A-Z', value: 'A-Z'},
    {label: 'Z-A', value: 'Z-A'},
  ]

  const handleOrder = (e, { type }) => {
    let cache = {...orderBy};
    
    if(orderBy.type !== type) cache.type = type;
    
    cache.order = e.value;
    
    dispatch(setOrderBy(cache))
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
        <Select className="selectOrder"
        options={orderSelectByAlphabetical}
        onChange={(e) => handleOrder(e, {type: 'title'})}
      /><br></br>
   <input className="searchbar" type="text" 
   placeholder="Search by name" 
    onChange={handleSearch}/>
    <h2>Order By:</h2>

<select onChange={handleFilterbyDiet}>
  <option value=""></option>

  {diets && diets.map((diet, indexkey) => {
    diet = diet[0].toUpperCase() + diet.slice(1);

    return (
      <option key={indexkey} value={diet}>
        {diet}
      </option>
    );
  })}
</select> <br></br>
      
      </nav>
     
  );
}
