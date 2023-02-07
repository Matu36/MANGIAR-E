import React from "react";
import Diets from "../../components/Diets/Diets";
import {getIngredients, createRecipe} from "../../Redux/actions";
import {connect} from "react-redux";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import s from './CreateRecipe.module.css';
import logo from "../../img/creandoReceta.jpg";
//import {Redirect} from 'react-router-dom';

<<<<<<< HEAD
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
=======
class CreateRecipe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      instructions: '',
      image: '',
      ingredients: [],
      diets: [],
      error: {
        title: true,
        instructions: true,
        image: false,
        ingredients: true,
      },
      completed: true
    };
  }

  componentDidMount(){
    if (!this.props.ingredients) this.props.getIngredients();
  }

  handleOnSelect = autocomplete => {
    if (this.state.ingredients.map(el => el.id).includes(autocomplete.id)) return alert('The ingredient is already in the list!');
    let ingredients = [...this.state.ingredients, {...autocomplete, amount: 0, unit: autocomplete.units[0]}];
    this.setState(old => ({...old, error: {...old.error, ingredients: true}, ingredients}));
  };

  formatResult = item => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.createRecipe({...this.state, image: (this.state.image) ? this.state.image: null, ingredients: this.state.ingredients.map(({id, amount, unit}) => ({id, amount, unit}))})
      .then(() => alert(`The Recipe '${this.state.title}' has been created!`))
      .catch(() => alert(`Error ocurred.`))
      .then(() => this.setState({completed: true}))
  }

  handleOnDelete = ({target}) => {
    this.setState(old => ({...old, ingredients: old.ingredients.filter(el => el.id != target.id)}), () => console.log('cambio', this.state))
  }

  handleOnUnitChange = (id, value) => {
    this.setState(old => ({...old, ingredients: 
      this.state.ingredients.map(el => 
        (el.id == id) ? {...el, unit: value} : el
      )
    }));
  }

  handleOnChange = ({target}) => {
    let error = {...this.state.error};
  
    switch (target.name){
      case 'title': error.title = (target.value.length < 4 || target.value.length > 25); break;
      case 'image': error.image = (target.value !== '' && !(/^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g.test(target.value))); break;
      case 'ingredient': error.ingredients = (!target.value)
      case 'instructions': error.instructions = (target.value.length < 4); break;
      default: break;
    }

    let change = (target.name !== 'ingredient')
      ? {[target.name]: target.value}
      : {ingredients: this.state.ingredients.map(el => 
        (el.id != target.id)
          ? el
          : {...el, amount: (target.value <= 0) ? 0 : target.value}
        )}

    this.setState(old => ({...old, ...change, error}));
  }

  handleDiets = diets => {
    this.setState(old => ({...old, diets}));
  }

  render() {
    //    if (this.state.completed) return <Redirect to="/home" />
    if (!this.props.ingredients) return (<h2>Loading ingredients...</h2>)

    return (
      <div className= {s.container}>
        <br />
        <h1 className= {s.title}> Create Your Own Recipe! </h1>
        <br />

        <div className= {s.img}>
        <img className= {s.image}src= {logo} alt="receta" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <table style={{width: '50%', margin: 'auto'}}>
            <br />
            
            

            <div className= {s.body}>
            <tbody>
              <tr>
                <td width="50%"><label htmlFor className={s.label}>Title:</label></td>
                <td><input className= {s.input} type="text" id="title" name="title" value={this.state.title} placeholder= "Recipe title..." onChange={this.handleOnChange} /></td>
              </tr>
              <tr><td colSpan={2} style={{fontSize: 'smaller', paddingBottom: '20px', color: this.state.error.title ? 'red' : 'green'}}>Title must be between 4 and 25 characters string</td></tr>
              <tr>
                <td ><label  htmlFor className={s.label}>Image URL:</label></td>
                <td><input className= {s.input}  type="url" id="image" name="image" value={this.state.image} placeholder="Recipe Image URL..." onChange={this.handleOnChange} /></td>
              </tr>
              <tr><td colSpan={2} style={{fontSize: 'smaller', paddingBottom: '20px', color: this.state.error.image ? 'red' : 'green'}}>URL must be an valid URL or empty</td></tr>
              <tr>
                <td><label htmlFor className={s.label}>Instructions:</label></td>
                <td><input className= {s.input}  type="text" id="instructions" name="instructions" value={this.state.instructions} placeholder="Recipe Instructions..." onChange={this.handleOnChange} /></td>
              </tr>
              <tr><td colSpan={2} style={{fontSize: 'smaller', paddingBottom: '20px', color: this.state.error.instructions ? 'red' : 'green'}}>Instructions length min 4</td></tr>
            </tbody>
            </div>
            
          </table>
      
          <div className= {s.table }>
            <Diets onChange={this.handleDiets} diets={this.props.diets.filter(el => el !== 'All Diets')} actives={this.state.diets} />
            
          </div>
          
          <div style={{width: '50%', margin: 'auto'}}>
            
            
            <ReactSearchAutocomplete
              showClear
              showNoResultsText="No ingredients finded..."

              items={this.props.ingredients}
              onSelect={this.handleOnSelect}
              autoFocus
              formatResult={this.formatResult}
              placeholder="Ingredients search"
            />
          </div>
          <div style={{width: '50%', margin: 'auto'}}>
              {
                this.state.ingredients.length
                ? <table style={{margin: 'auto'}}>
                    <tbody>
                    {
                      this.state.ingredients.map(el =>
                        <tr key={el.id} className={`${(!el.amount) && s.error}`}>
                          <td name="deleteIngredient" id={el.id} onClick={this.handleOnDelete}>X</td>
                          <td>{el.name}</td>
                          <td><input type="number" id={el.id} value={el.amount} name="ingredient" onChange={this.handleOnChange}></input></td>
                          <td>
                            <select name="units" onChange={({target}) => this.handleOnUnitChange(el.id, target.value)}>
                            {
                              el.units.map(unit => <option key={el.id + ' ' + unit} value={unit}>{unit}</option>)
                            }
                            </select>
                          </td>
                        </tr>
                      )
                    }
                    
                  </tbody>
                </table>
                : <p style={{fontSize: 'smaller', paddingBottom: '20px', color: 'red'}}>Recipe must have at least one ingredient</p>
              }
          </div>
          <div className= {s.pagfoot}>
          <p className= {s.cost}>Estimated cost of recipe: {this.state.ingredients.reduce((aux, el) => aux + el.price * el.amount, 0)}</p>
          <input type="submit" value="Submit" disabled={Object.values(this.state.error).includes(true)}/>
        </div>
        </form>
      </div>
    )
  }
}

export default connect(({ingredients, diets}) => ({ingredients, diets}), {getIngredients, createRecipe})(CreateRecipe);
>>>>>>> rama-para-solucionar
