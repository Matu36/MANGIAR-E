import React from "react";
import s from "./searchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setRecipeIdAutocomplete,
  setSearchValueName,
} from "../../Redux/actions/index.js";
import { ReactSearchAutocomplete } from "react-search-autocomplete";


export default function SearchBar() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
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


  return (
    <div className={s.container}>
          <div className={s.componentDiv}>
            <ReactSearchAutocomplete
              items={mapRecipes}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
            />
          </div>
      </div>
  );
}
