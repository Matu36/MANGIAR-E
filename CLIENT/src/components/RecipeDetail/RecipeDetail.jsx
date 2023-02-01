import React from "react";
import NavBar from "../NavBar/NavBar";
import s from "./RecipeDetail.module.css";

const img =
  "https://3.bp.blogspot.com/-RQ01Qk_X99g/UcBTEr33WNI/AAAAAAAB0U4/itGN1VVChNM/s1600/fotografias-de-comida-china-bufette-chinesse-food-arroz-comida-asiatica-2.jpg";

function RecipeDetail() {
  return (
    <div className={s.bigContainer}>
      <NavBar />
      <div className={s.container}>
        <div className={s.card}>
          <img src={img} className={s.img} alt="recipe" />
          <div className={s.data}>
            <h2>Nombre Receta</h2>
            <p>
              <span>Summary: </span> Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Architecto, nesciunt? Laudantium quam magni
              dolorem optio in atque ipsa soluta provident repudiandae
              perspiciatis eveniet neque aspernatur beatae totam, omnis iure
              sint.
            </p>
            <p>
              <span>Healt Score: </span> 8/10
            </p>
            <p>
              <span>Type of diet: </span> Vegan - Keto
            </p>
            <h4>Steps:</h4>
            <ul>
              <li>Step 1</li>
              <li>Step 2</li>
              <li>Step 3</li>
              <li>Step 4</li>
              <li>Step 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
