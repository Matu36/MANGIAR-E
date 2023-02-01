require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/mangiare`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Users,
  Orders,
  Order_details,
  Shopping_carts,
  Favorites,
  Reviews,
  Recipes,
  Recipe_ingredients,
  Recipe_diets
} = sequelize.models;

// Relaciones

Orders.belongsTo(Users, {foreignKey: 'userId'});
Users.hasMany(Orders, {foreignKey: 'userId'});

Order_details.belongsTo(Orders, {foreignKey: 'orderId'});
Orders.hasMany(Order_details, {foreignKey: 'orderId'});

Shopping_carts.belongsTo(Users, {foreignKey: 'userId'});
Users.hasMany(Shopping_carts, {foreignKey: 'userId'});

Favorites.belongsTo(Users, {foreignKey: 'userId'});
Users.hasMany(Favorites, {foreignKey: 'userId'});

Reviews.belongsTo(Users, {foreignKey: 'userId'});
Users.hasMany(Reviews, {foreignKey: 'userId'});

Recipe_ingredients.belongsTo(Recipes, {foreignKey: 'recipeId'});
Recipes.hasMany(Recipe_ingredients, {foreignKey: 'recipeId'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};