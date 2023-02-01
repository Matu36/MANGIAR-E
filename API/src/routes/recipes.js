const { Router } = require("express");
const { getRandomApiInfo } = require("../controllers/randomRecipe");
const router = Router();

router.get("/randomRecipe", async (req, res) => {
  try {
    let randomRecipe = await getRandomApiInfo();
    return res.status(200).send(randomRecipe);
  } catch {
    return res.status(400).send("No Random Recipe");
  }
});
