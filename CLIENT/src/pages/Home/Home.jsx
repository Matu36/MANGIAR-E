
import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/searchBar";
import { healthyTips } from "../../components/healthyTips/healthyTips";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../Redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const allDiets = useSelector((state) => state.diets);

  const randomTip = () => {
    var myArray = healthyTips;
    var rand = Math.floor(Math.random() * myArray.length);
    var rValue = myArray[rand];
    return rValue;
  };

  const handleClick = (e) => {
    // Cargar Países
    e.preventDefault();
    //setLoader(true);
    //dispatch(traertodas lasrecetas());
    //dispatch(setCurrentPage(1));
    //timer(500);
  };


  //                Filtro por DIET                  //---------------

  const [recipesByDiet, setRecipesForDiet] = useState(allRecipes);

  const filter = useSelector((state) => state.filterByDiet);

  useEffect(() => {
    filter === "All Diets"
      ? setRecipesForDiet(allRecipes)
      : setRecipesForDiet(
          allRecipes.filter((recipe) =>
            recipe.diets.some(
              (diet) => diet.toLowerCase() === filter.toLowerCase()
            )
          )
        );
  }, [filter, allRecipes]);

  //                 Filtro por Ingredientes                   //----------------

  const [recipesByIngredient, setRecipesByIngredient] = useState(recipesByDiet);

  const ingredientValue = useSelector((state) => state.searchValue);

  const filterByIngredient = () => {
    let recipesCache = [...recipesByDiet];

    recipesCache = recipesCache.filter((recipe) =>
      recipe.ingredients.some(
        (ingredient) => ingredient.name === ingredientValue
      )
    );

    setRecipesByIngredient(recipesCache);
  };

  useEffect(() => {
    filterByIngredient();
  }, [ingredientValue, recipesByDiet]);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <div className>
      <NavBar handleClick={handleClick} />
      <SearchBar />
      <br />
      <br />

      <div className="Tip del día">
        <h4>Tip del Día</h4>
        <p>{randomTip()}</p>
      </div>
    </div>
  );
}

