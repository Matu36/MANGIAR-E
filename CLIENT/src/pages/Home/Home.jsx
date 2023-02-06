import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/searchBar";
import { healthyTips } from "../../components/healthyTips/healthyTips";
import { getRecipes } from "../../Redux/actions";
import Paginations from "../../components/Paginations/Paginations";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default function Home() {
  let dispatch = useDispatch(); // hooks para conectar con la actions
  const allRecipes = useSelector((state) => state.recipes);
  const recipeDetailIdAutocomplete = useSelector(
    (state) => state.recipeIdAutocomplete
  );

  // componentDidMount para hacer la solicitud a la api/db al iniciar el componente Home una sola vez.
  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  const [recipeByIdAutocomplete, setrecipeByIdAutocomplete] = useState();

  const filterById = () => {
    const cache = [...allRecipes];
    const recipe = cache.find(
      (recipe) => recipe.id === recipeDetailIdAutocomplete
    );
    setrecipeByIdAutocomplete(recipe);
  };

  useEffect(() => {
    filterById();
  }, [recipeDetailIdAutocomplete, allRecipes]);

  //                Filtro por DIET                  //---------------

  const [recipesByDiet, setRecipesForDiet] = useState(allRecipes);

  const filterbyDiet = useSelector((state) => state.filterByDiet);

  useEffect(() => {
    filterbyDiet === "All Diets"
      ? setRecipesForDiet(allRecipes)
      : setRecipesForDiet(
          allRecipes.filter((recipe) =>
            recipe.diets.some(
              (diet) => diet.toLowerCase() === filterbyDiet.toLowerCase()
            )
          )
        );
  }, [filterbyDiet, allRecipes]);

  //                 Filtro por Name                   //----------------
  const [recipesByName, setRecipesByName] = useState(recipesByDiet);

  const nameValue = useSelector((state) => state.searchValueName);

  const filterByName = () => {
    let arrayCache = [...recipesByDiet];

    arrayCache = arrayCache.filter((recipe) =>
      recipe.title.toLowerCase().includes(nameValue.toLowerCase())
    );

    setRecipesByName(arrayCache);
  };

  useEffect(() => {
    filterByName();
  }, [nameValue, recipesByDiet]);

  //                 Filtro por Orden de Healthscore      //----------------------------

  const orderBy = useSelector((state) => state.orderBy);

  const orderByProp = () => {
    const { order, type } = orderBy;

    let cache = [...recipesByName];

    if (order === "") return setRecipesByName(recipesByName);
    // El metodo sort ordena segun el valor mayor igual o menor que cero dependiendo la funciona comparadora
    cache.sort((a, b) => {
      if (a[type] < b[type])
        return order === "A-Z" || order === "Menor a Mayor" ? -1 : 1;
      if (a[type] > b[type])
        return order === "A-Z" || order === "Menor a Mayor" ? 1 : -1;
      return 0;
    });

    setRecipesByName(cache);
  };

  useEffect(() => {
    orderByProp();
  }, [orderBy]);

  //                 Paginacion del contenido             //-----------------------------

  const [currentPage, setCurrentPage] = useState(1); //Pagina Actual seteada en 1
  const [numberOfPage, setNumberOfPage] = useState(0); //Numero de Paginas seteado en 0
  const [totalRecipes, setTotalRecipes] = useState([]); //Recetas Totales Seteada en Array Vacio

  const indexFirstPageRecipe = () => (currentPage - 1) * 9; // Indice del primer Elemento
  const indexLastPageRecipe = () => indexFirstPageRecipe() + 9; //Indice del segundo elemento

  const handlePageNumber = (number) => {
    //Manejo del numero de pagina
    setCurrentPage(number);
  };

  useEffect(() => {
    //Cambio de estado local de Total Recipes indicando los indices que tiene que renderizar en cada pagina
    setTotalRecipes(
      recipesByName.slice(indexFirstPageRecipe(), indexLastPageRecipe())
    );
    setNumberOfPage(Math.ceil(recipesByName.length / 9)); // cambiando el estado local de numeros de paginas a renderiza
  }, [recipesByName, currentPage]);

  useEffect(() => {
    setCurrentPage(1); //setea el numero de pagina actual a 1 cuando recipesName Cambia
  }, [recipesByName]);

  /*const mapArrayDeObetos = allRecipes.map((r) =>{
    return {name:r.title,
            img:r.image,
            diets: r.diets}
  })

  const randomImg = () => {
    var myArray = mapArrayDeObetos;
    var rand = Math.floor(Math.random() * myArray.lenght);
    var rValue = myArray[rand];
    return rValue;
  }*/

  const randomTip = () => {
    var myArray = healthyTips;
    var rand = Math.floor(Math.random() * myArray.length);
    var rValue = myArray[rand];
    return rValue;
  };

  return (
    <div className={s.containerMain}>
      <NavBar />
      <SearchBar />
      <div className={s.divHealthyTip}>
        <h3>Healthy Tip</h3>
        <br />
        <div className={s.divRandomTip}>{randomTip()}</div>
      </div>
      {recipeByIdAutocomplete && (
        <RecipeCard
          id={recipeByIdAutocomplete.id}
          title={recipeByIdAutocomplete.title}
          image={recipeByIdAutocomplete.image}
          diets={recipeByIdAutocomplete.diets}
        />
      )}

      <div className={s.containerRecipeCards}>
        {(orderBy.order !== "" || filterbyDiet !== "") &&
          (totalRecipes?.map((recipe) => (
            <div key={recipe.id} className="divCard">
              <RecipeCard
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                diets={recipe.diets}
              />
            </div>
          )) || (
            <div className="nFound">
              <img className="not found" alt="no Results" />
              <h2>No se encontraron resultados</h2>
            </div>
          ))}
      </div>

      <hr />
      <div className={s.divPagination}>
        {(orderBy.order !== "" || filterbyDiet !== "" || nameValue !== "") && (
          <Paginations
            currentPage={currentPage}
            numberOfPage={numberOfPage}
            handlePageNumber={handlePageNumber}
          />
        )}
      </div>
    </div>
  );
}
