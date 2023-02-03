const { default: axios } = require('axios');
const {Users, Orders, Order_details, Shopping_carts, Favorites, Recipes, Recipe_ingredients, Recipe_diets} = require('../db');
const {API_KEY} = process.env;

async function locMock (){
  ////////////////// Users //////////////////////

  await Users.bulkCreate([
    {username: 'nombre 1', email: 'email1@email.com', password: 'password 1'},
    {username: 'nombre 2', email: 'email2@email.com', password: 'password 2'},
    {username: 'nombre 3', email: 'email3@email.com', password: 'password 3'}
  ]);

  ////////////////// Orders //////////////////////

  await Orders.bulkCreate([
    {userId: 1},
    {userId: 2, tsPayment: new Date(2023, 0, 1)},
    {userId: 2}
  ]);

  ////////////////// Order_details //////////////////////

  await Order_details.bulkCreate([
    {orderId: 1, ingredientId: 1, quantity: 0.100},
    {orderId: 3, ingredientId: 1, quantity: 100},
    {orderId: 3, ingredientId: 2, quantity: 200},
    {orderId: 3, ingredientId: 3, quantity: 300},
    {orderId: 2, ingredientId: 1, quantity: 1},
    {orderId: 2, ingredientId: 2, quantity: 2},
  ]);

  ////////////////// Shopping_carts //////////////////////

  await Shopping_carts.bulkCreate([
    {ingredientId: 4, quantity: 4, userId: 2},
    {ingredientId: 5, quantity: 5, userId: 2},
    {ingredientId: 6, quantity: 6, userId: 2}
  ]);

  (await Shopping_carts.create({ingredientId: 7, quantity: 7, userId: 3}));

  let order;

  ////////////////// New Order //////////////////////////

  await Order_details.create({orderId: (await Orders.create({userId: 3})).dataValues.id, ingredientId: 1, quantity: 0.100});

  //console.log(order.dataValues); // {id: 4.......}

  ///////////////// New Order (Shopping_cart & User based) /////////////////////////////

  let cart = await Shopping_carts.findAll({where: {userId: 3}});

  order = await Orders.create({userId: 1});
  await Order_details.bulkCreate(cart.map(({dataValues}) => ({...dataValues, id: null, orderId: order.dataValues.id})));

  //console.log((await Users.findByPk(1, {include: 'Orders', required: false})).toJSON());

  ///////////////// Favorites (Recipe & User) /////////////////////////////

  await Favorites.create({userId: 1, recipeId: 128});
  await Favorites.create({userId: 2, recipeId: 128});
  await Favorites.create({userId: 1, recipeId: 127});
//    await Favorites.create({userId: 2, recipeId: 128});

 ///////////////// Recipes /////////////////////////////

  await Recipes.create({id: 127, instructions: 'Instrucciones receta 127'});
  await Recipes.create({id: 128, instructions: 'Instrucciones receta 128'});
  await Recipes.create({id: 4, instructions: 'Instrucciones receta 4'});
  await Recipes.create({id: 5, instructions: 'Instrucciones receta 5'});

  await Recipe_ingredients.create({recipeId: 5, ingredientId: 5, quantity: 1});
  await Recipe_ingredients.create({recipeId: 4, ingredientId: 5, quantity: 2});
  await Recipe_ingredients.create({recipeId: 5, ingredientId: 4, quantity: 3});
//     await Recipe_ingredients.create({recipeId: 5, ingredientId: 5, quantity: 4});

//console.log((await Recipes.findByPk(5, {include: 'Recipe_ingredients'})).toJSON());

/*
console.log('/////////////// Sin include //////////////////', (await Favorites.findAll({where: {userId: 1}})));
console.log('/////////////// Con include //////////////////', (await Users.findByPk(1, {include: 'Favorites'})).toJSON());
*/

  //////////////// Diets /////////////////

  await Recipe_diets.create({recipeId: 5, diet: 'vegan'});
  await Recipe_diets.create({recipeId: 5, diet: 'primal'});
//      await Recipe_diets.create({recipeId: 5, diet: 'primal'});

//console.log((await Recipes.findByPk(5, {include: 'Recipe_diets'})).toJSON());
}

async function apiMock (apiRegs = 10){

  // https://api.spoonacular.com/recipes/complexSearch?apiKey=773ce458cdb14b6aa7558d74e5db3e57&addRecipeInformation=true&number=5
  // https://api.spoonacular.com/recipes/informationBulk?ids=782585,716426,715497&apiKey=773ce458cdb14b6aa7558d74e5db3e57

  let recipesArr = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${apiRegs}`))
    .data.results
    .map(({id, title, image, diets, analyzedInstructions}) => ({id, title, image, diets, instructions: analyzedInstructions[0].steps.map(({step}) => step).join(' ')}));

  //await Recipes.bulkCreate(recipesArr);
  console.log((await Recipes.bulkCreate(recipesArr)).map(({dataValues}) => dataValues));

  //await Recipe_diets.bulkCreate(recipesArr.reduce((array, {id, diets}) => array.concat(...diets.map(diet => ({recipeId: id, diet}))), []));
  console.log((await Recipe_diets.bulkCreate(recipesArr.reduce((array, {id, diets}) => array.concat(...diets.map(diet => ({recipeId: id, diet}))), []))).map(({dataValues}) => dataValues));
}

module.exports = async (api) => {
  if (api)
    apiMock(api);
  else
    locMock();

  console.log('Mock agregados a DB!');
}    
  