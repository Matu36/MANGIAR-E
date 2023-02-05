import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRecipeIdAutocomplete,
  setSearchValueName,
} from "../../Redux/actions/index.js";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { filterByDiet, setOrderBy } from "../../Redux/actions/index.js";
import s from "../SearchBar/searchBar.module.css";
import Select from "react-select";

export default function SearchBar() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const diets = useSelector((state) => state.diets);
  const orderBy = useSelector((state) => state.orderBy);
  const recipeDetailIdAutocomplete = useSelector(
    (state) => state.recipeIdAutocomplete
  );

  console.log(recipeDetailIdAutocomplete);

  const mapRecipes = recipes.map((r) => {
    return { name: r.title, id: r.id, img: r.image, diet: r.diets };
  });

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    dispatch(setRecipeIdAutocomplete(item.id));
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  const handleSearch = (event) => {
    dispatch(setSearchValueName(event.target.value));
  };

  const handleFilterbyDiet = (event) => {
    console.log(event);
    dispatch(filterByDiet(event.value));
  };

  const orderSelectByAlphabetical = [
    { label: "Select Order Alphabetical", value: "" },
    { label: "A-Z", value: "A-Z" },
    { label: "Z-A", value: "Z-A" },
  ];

  const optionsDiets = [{ label: "Select Diet", value: " " }].concat(
    diets.map((diet) => {
      diet = diet[0].toUpperCase() + diet.slice(1);

      return { label: diet, value: diet };
    })
  );

  const handleOrder = (e, { type }) => {
    let cache = { ...orderBy };

    if (orderBy.type !== type) cache.type = type;

    cache.order = e.value;

    dispatch(setOrderBy(cache));
  };

  return (
    <nav className={s.navBarMain}>
      <div className={s.divContainerMain}>
        <div className={s.divSearchBar}>
          <div className={s.divReactSearchAutocomplete}>
            <ReactSearchAutocomplete
              items={mapRecipes}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
              placeholder="Buscar Recetas"
            />
          </div>
          <div className={s.divSelectByDiets}>
            <Select
              className={s.SelectByDiets}
              options={optionsDiets}
              onChange={(e) => handleFilterbyDiet(e)}
              placeholder="Order By Diets"
            />
          </div>
          <div className={s.divSelectByAlphabetical}>
            <Select
              className={s.SelectByAlphabetical}
              options={orderSelectByAlphabetical}
              onChange={(e) => handleOrder(e, { type: "title" })}
              placeholder="Order By Alphabetical"
            />
          </div>
          <div className={s.divInputName}>
            <input
              className={s.inputName}
              type="text"
              placeholder="Search by name"
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
