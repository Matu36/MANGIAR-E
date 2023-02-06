const { default: axios } = require("axios");
const {
  Users,
  Orders,
  Order_details,
  Shopping_carts,
  Favorites,
  Recipes,
  Recipe_ingredients,
  Diets,
  Ingredients,
  Ingredient_units,
} = require("../db");
const { API_KEY } = process.env;

async function locMock() {
  ////////////////// Users //////////////////////

  await Users.bulkCreate([
    { username: "nombre 1", email: "email1@email.com", password: "password 1" },
    { username: "nombre 2", email: "email2@email.com", password: "password 2" },
    { username: "nombre 3", email: "email3@email.com", password: "password 3" },
  ]);

  ////////////////// Orders //////////////////////

  await Orders.bulkCreate([
    { userId: 1 },
    { userId: 2, tsPayment: new Date(2023, 0, 1) },
    { userId: 2 },
  ]);

  await Diets.bulkCreate([
    { name: "gluten free" },
    { name: "dairy free" },
    { name: "lacto ovo vegetarian" },
    { name: "vegan" },
    { name: "vegetarian" },
    { name: "paleolithic" },
    { name: "primal" },
    { name: "whole 30" },
    { name: "pescatarian" },
    { name: "ketogenic" },
    { name: "fodmap friendly" },
  ]);

  ///////////////// Ingredients /////////////////////////////

  let carne = await Ingredients.create({ name: "carne", price: 1500 });
  let panRallado = await Ingredients.create({
    name: "pan rallado",
    price: 1000,
  });
  let huevos = await Ingredients.create({ name: "huevos", price: 20 });
  let papa = await Ingredients.create({ name: "papa", price: 400 });
  let leche = await Ingredients.create({ name: "leche", price: 50 });
  let manteca = await Ingredients.create({ name: "manteca", price: 30 });

  let carnePicada = await Ingredients.create({
    name: "carne picada",
    price: 1500,
  });
  let tomate = await Ingredients.create({ name: "tomate", price: 50 });
  let lechuga = await Ingredients.create({ name: "lechuga", price: 20 });

  let zapallitos = await Ingredients.create({ name: "zapallitos", price: 50 });
  let quesoCremoso = await Ingredients.create({
    name: "queso cremoso",
    price: 1000,
  });
  let harina = await Ingredients.create({ name: "harina", price: 200 });

  ///////////////// Recipes /////////////////////////////

  let milaConPure = await Recipes.create({
    title: "Mila con pure",
    image:
      "https://www.simplefood.com.ar/wp-content/uploads/2021/03/Milanesa-de-pollo.jpg",
    instructions: "Instrucciones receta 1",
  });
  milaConPure.addIngredient(carne, {
    through: {
      amount: 1,
      unit: "pounds",
    },
  });

  let completaConFritas = await Recipes.create({
    title: "Hamburguesa completa con papas fritas",
    image:
      "https://img.freepik.com/fotos-premium/hamburguesas-papas-fritas-vaso-cola_237253-79.jpg?w=740",
    instructions: "Instrucciones receta 2",
  });
  let tartaZapallitos = await Recipes.create({
    title: "Tarta de zapallitos",
    image: "https://assets.unileversolutions.com/recipes-v2/43250.jpg",
    instructions: "Instrucciones receta 3",
  });

  ///////////////// Ingredient Units /////////////////////////////

  await Ingredient_units.bulkCreate([
    { ingredientId: 1, unit: "pounds" },
    { ingredientId: 2, unit: "pounds" },
    { ingredientId: 3, unit: "units" },
    { ingredientId: 4, unit: "pounds" },
    { ingredientId: 5, unit: "cup" }, // leche
    { ingredientId: 5, unit: "tablespoon" }, // leche
    { ingredientId: 6, unit: "tablespoon" },
    { ingredientId: 7, unit: "pounds" },
    { ingredientId: 8, unit: "units" },
    { ingredientId: 9, unit: "units" },
    { ingredientId: 10, unit: "units" },
    { ingredientId: 11, unit: "pounds" },
    { ingredientId: 12, unit: "pounds" },
  ]);

  ////////////////// Order_details //////////////////////

  await Order_details.bulkCreate([
    { orderId: 1, ingredientId: 5, amount: 1, unit: "tablespoon" },
    { orderId: 1, ingredientId: 12, amount: 2, unit: "pounds" },
    { orderId: 3, ingredientId: 5, amount: 10, unit: "cups" },
    { orderId: 3, ingredientId: 1, amount: 2, unit: "pounds" },
    { orderId: 3, ingredientId: 2, amount: 300, unit: "pounds" },
    { orderId: 2, ingredientId: 3, amount: 1, unit: "units" },
    { orderId: 2, ingredientId: 4, amount: 2, unit: "pounds" },
  ]);

  ////////////////// Shopping_carts //////////////////////

  await Shopping_carts.bulkCreate([
    { userId: 3, ingredientId: 7, amount: 2, unit: "pounds" },
    { userId: 3, ingredientId: 8, amount: 6, unit: "units" },
    { userId: 3, ingredientId: 9, amount: 3, unit: "units" },
    { userId: 2, ingredientId: 10, amount: 10, unit: "units" },
  ]);

  let order;

  ////////////////// New Order //////////////////////////

  await Order_details.create({
    orderId: (await Orders.create({ userId: 3 })).dataValues.id,
    ingredientId: 1,
    amount: 0.1,
    unit: "pounds",
  });

  //console.log(order.dataValues); // {id: 4.......}

  ///////////////// New Order (Shopping_cart & User based) /////////////////////////////

  let cart = await Shopping_carts.findAll({ where: { userId: 3 } });

  order = await Orders.create({ userId: 1 });
  await Order_details.bulkCreate(
    cart.map(({ dataValues }) => ({
      ...dataValues,
      id: null,
      orderId: order.dataValues.id,
    }))
  );

  //console.log((await Users.findByPk(1, {include: 'Orders', required: false})).toJSON());

  ///////////////// Favorites (Recipe & User) /////////////////////////////

  await Favorites.create({ userId: 1, recipeId: 2 });
  await Favorites.create({ userId: 2, recipeId: 1 });
  await Favorites.create({ userId: 1, recipeId: 1 });

  /*
console.log('/////////////// Sin include //////////////////', (await Favorites.findAll({where: {userId: 1}})));
console.log('/////////////// Con include //////////////////', (await Users.findByPk(1, {include: 'Favorites'})).toJSON());
*/

  //console.log((await Recipes.findByPk(5, {include: 'Recipe_diets'})).toJSON());
}

async function apiMock(apiRegs = 10) {
  // https://api.spoonacular.com/recipes/complexSearch?apiKey=773ce458cdb14b6aa7558d74e5db3e57&addRecipeInformation=true&number=5
  // https://api.spoonacular.com/recipes/informationBulk?ids=782585,716426,715497&apiKey=773ce458cdb14b6aa7558d74e5db3e57
  // https://api.spoonacular.com/recipes/random?number=10&apiKey=773ce458cdb14b6aa7558d74e5db3e57

  let recipesArr = (
    await axios.get(
      `https://api.spoonacular.com/recipes/random?number=${apiRegs}&apiKey=${API_KEY}`
    )
  ).data.recipes.map(
    ({ id, title, image, diets, instructions, extendedIngredients }) => ({
      id,
      title,
      image,
      diets,
      instructions,
      ingredients: extendedIngredients.map(({ id, name, amount, unit }) => ({
        id,
        name,
        amount,
        unit,
      })),
    })
  );

  let log = recipesArr;

  //  log = // inserts en recipes
  (
    await Recipes.bulkCreate(
      recipesArr.map(({ id, title, image, instructions }) => ({
        id,
        title,
        image,
        instructions,
      }))
    )
  ).map(({ dataValues }) => dataValues);

  ///// Acomodo la lista de recetas ////
  let auxIngredients = recipesArr
    .reduce(
      (aux, { ingredients }) =>
        aux.concat(
          ...ingredients.map(({ id, name, amount, unit }) => ({
            id,
            name,
            amount,
            unit,
            price: (Math.random() * 1000 + 1).toFixed(2),
          }))
        ),
      []
    )
    .reduce(
      (aux, el) =>
        aux.concat(el.id > 0 && !aux.find((el2) => el2.id === el.id) && el),
      []
    )
    .filter((el) => el); // saco id 0, negativos y duplicados

  //  log = auxIngredients;

  //  log = // inserts en ingredients
  (await Ingredients.bulkCreate(auxIngredients)).map(
    ({ dataValues }) => dataValues
  );

  //  log = // inserts en ingredient_units
  (
    await Ingredient_units.bulkCreate(
      auxIngredients
        .map(({ id, unit }) => ({ ingredientId: id, unit: unit || "units" }))
        .reduce(
          (aux, el) =>
            aux.concat(
              !aux.find(
                (el2) => el2.ingredientId === el.id && el2.unit === el.unit
              ) && el
            ),
          []
        )
        .filter((el) => el)
    )
  ).map(({ dataValues }) => dataValues);

  log = // inserts en recipe_ingredients
    (
      await Recipe_ingredients.bulkCreate(
        recipesArr
          .reduce(
            (aux, recipe) =>
              aux.concat(
                ...recipe.ingredients.map(({ id, amount, unit }) => ({
                  recipeId: recipe.id,
                  ingredientId: id,
                  amount,
                  unit: unit || "units",
                }))
              ),
            []
          )
          .reduce(
            (aux, el) =>
              aux.concat(
                el.ingredientId > 0 &&
                  !aux.find(
                    (el2) =>
                      el2.ingredientId === el.ingredientId &&
                      el2.recipeId === el.recipeId
                  ) &&
                  el
              ),
            []
          )
          .filter((el) => el)
      )
    ).map(({ dataValues }) => dataValues);

  //console.log (log, log.length);
}

module.exports = async (api) => {
  locMock();
  apiMock(api);
  console.log("Mock agregados a DB!");
};
