import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/searchBar";
import { healthyTips } from "../../components/healthyTips/healthyTips";
import { connect } from "react-redux";
import { getRecipes } from "../../Redux/actions";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const Home = ({ getRecipes, recipes }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const recipess =  useSelector((state) => state.recipes);

  const mapImgRecipes = recipess.map((r) => {
    return {
      
      name: r.title,
      img: r.image}
});

  const randomImg = () => {
    var myArray = mapImgRecipes;
    var rand = Math.floor(Math.random() * myArray.lenght);
    var rValue = myArray[rand];
    return rValue;
  }

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

  const buttonGetRecipes = () => {
    getRecipes();
  };

  const consolelogRecipes = () => {
    console.log("recetas desde HOME: ", recipes);
  };

  return (
    <div className>
      <NavBar handleClick={handleClick} />
      <SearchBar />
      <br />
      <br />

      <div className="RandomCard">
        {randomImg}
        
      </div>

      <div className="Tip del día">
        <h4>Tip del Día</h4>
        <p>{randomTip()}</p>
      </div>

      <br />
      <br />
      <div className={s.cardsContainer}>
        {recipes &&
          recipes.map((r, i) => {
            return (
              <RecipeCard
                key={i}
                title={r.title}
                img={r.image}
                diets={r.diets}
              />
            );
          })}

        {/* <RecipeCard
          title="Nueva receta"
          img="https://spoonacular.com/recipeImages/782585-312x231.jpg"
          diets={["gluten free", "vegan"]}
        /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

