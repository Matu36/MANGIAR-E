import React, { useState } from "react";

const CreateRecipe = () => {
const dietsArray = ['vegan', 'paleo', 'ovo']

  const [input, setInput] = useState({
    name: '', 
    image: '' ,
    summary:'', 
    healthScore: 0,
    stepByStep:[{numberStep: 1, description: ''}],
    diets:[]});
const handleClick = () => {

}

const handleSubmit = () => {

}
const handleChange = () => {

}

const handleSteps = () => {
}

const handleChangeDiets = () => {

}
  return (
    <div className="container-main-create-recipe">
      <div className="container-button-home">

        <button type="button" onClick={handleClick}>
              Go home
        </button>

      </div>
      <div className="container-form-prevcard">
          <div className="container-form">
            <h2 className="h2">
          
              You can create your new recipe here!
          
            </h2>
      
            <form onSubmit={handleSubmit}>
                    <label for='name'>Recipe name: </label>
                    <input type='text' id="name" name='name' value={input.name} onChange={handleChange}/><br></br>

                    <label for='image'>image: </label>
                    <input type='url' id="image" name='image' value={input.image} onChange={handleChange}/><br></br>
                    <label for='summary'>summary: </label>
                    <input type='text' id="summary" name='summary' value={input.summary} onChange={handleChange}/><br></br>
                    <label for='healthScore'>healthScore: </label>
                    <input type='range' id="healthScore" name='healthScore' value={input.healthScore} onChange={handleChange}/><br></br>
                

                    <h5>
                      In this part you will tell us how to make your recipe!
                    </h5>

                      {input.stepByStep?.map(step => (

                      <div key={step.numberStep}>

                      <label>numberStep {step.numberStep}:</label><br></br>
                      <textarea id="step" type="text" value={step.description} cols='50' row='20' name="description" onChange={(e)=>handleSteps(e, step.numberStep)}/><br></br>
                      </div>
                      ))}
                      <button 
                      className="buttons-create-recipe" 
                      onClick={(e) => handleSteps(e, input.stepByStep.findLastIndex(step => step.description !== '') + 1)}>
                        Add Step
                      </button>
                      <button 
                      className="buttons-create-recipe" 
                      type='delete' 
                      onClick={handleSteps}>
                        Delete last step
                      </button>
                  
              
                    <br></br>
                    <div className="divDiets">
                    <h4>
                      Choose the diets of your recipe!
                    </h4>

                      {dietsArray?.map((name,index) => {
                        name = name[0].toUpperCase() + name.slice(1);
                        return (<div><input type='checkbox' key={index} name='diet' value={name} onChange={(e)=> handleChangeDiets(e)}/>
                        <label for={index} >{name}</label><br></br></div>)}
                      )}
    
                    </div><br></br>
                      <button className="buttons-create-recipe" type='submit'>Create Recipe</button>
            </form><br></br>
          </div>
        <div className="PrevCard">
        <h2 className="h2">
          Preview Recipe
        </h2>
            Recipe Card
        </div>
      </div>


    </div>
  );
};


export default CreateRecipe;