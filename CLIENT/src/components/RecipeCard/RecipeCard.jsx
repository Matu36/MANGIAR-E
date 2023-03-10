import React from "react";
import s from "./RecipeCard.module.css";

function RecipeCard({ id, title, image, diets }) {
  return (
    <div className={s.card} id={id}>
      <div className={s.imgDiv}>
        <img src={image} alt={title} />
      </div>

      <div className={s.dataDiv}>
        <h2>{title}</h2>
        <div className={s.dietsDiv}>
          {diets.map((d, i) => {
            return <p key={i}>{d}</p>;
          })}
        </div>
      </div>

      <div className={s.buttonDiv}>
        <button>DETAILS</button>
      </div>
    </div>
  );
}

export default RecipeCard;
