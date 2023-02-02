import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/searchBar";
import { healthyTips } from "../../components/healthyTips/healthyTips";
import { connect } from "react-redux";
import { getRecipes } from "../../Redux/actions";

const Home = ({getRecipes, recipes}) => {

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
    console.log('recetas desde HOME: ', recipes)
  }

  return (
    <div className>
      <NavBar handleClick={handleClick} />
      <SearchBar />
      <button onClick={buttonGetRecipes}>GET recetas</button>
      <button onClick={consolelogRecipes}>CONSOL LOG recetas</button>
      <br />
      <br />

      <div className="Tip del día">
        <h4>Tip del Día</h4>
        <p>{randomTip()}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipes: () => dispatch(getRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
