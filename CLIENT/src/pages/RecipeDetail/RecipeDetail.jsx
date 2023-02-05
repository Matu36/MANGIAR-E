import React , { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate } from "react-router-dom";
import * as actions from "../../Redux/actions/index";
//import style from "../RecipeDetail/RecipeDetail.module.css";

const RecipeDetail = () => {
  let { idrecipe } = useParams();
  let history = useNavigate();
  let dispatch = useDispatch();
  let recipe = useSelector(state => state.recipeDetail);

  if(recipe.msg) alert(recipe.msg)
  const {name, image, summary, healthScore, stepByStep, diets} = recipe;
  
  const handleClick = () => {
    history.push('/home');
  }
  
  useEffect( () => {
    dispatch(actions.getRecipeDetail(idrecipe));

  },[idrecipe,dispatch]);

  return (
    <div className="container-main-detail">
      <div className="container-button-home">

          <button type="button" onClick={handleClick}>
              Go home
          </button>

      </div>
      <h3>{name}</h3>

      <div className="container-img-summary">

      <div className="recipe-detail-img"><img src={image} alt={name}/></div>
      <div className="recipe-detail-summary"><p>{summary}</p></div>

      </div>
      <h3 className="recipeDetail">healthScore: {healthScore}</h3>
      <ul className="recipeDetail">
      {stepByStep && stepByStep.map(({ numberStep, description}) => {
        return (<li>{numberStep} : {description}</li>)
      
      })}
      </ul>
      <ul className="recipeDetail">
      {diets && diets.map(diet => {
        return (<li>{diet}</li>)
      
      })} 
      </ul>
    </div>
  );
};


export default RecipeDetail;