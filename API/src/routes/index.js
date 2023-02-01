const { Router } = require("express");

const router = Router();

const randomRecipeRouter = require("../controllers/randomRecipeRouter");

//Rutas, Controllers
//router.get ("/ruta", controller);
router.use("/randomRecipe", randomRecipeRouter);

module.exports = router;
