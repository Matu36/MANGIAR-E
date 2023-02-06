import React from "react";
import s from "./RecipeCardHorizontal.module.css";

const RecipeCardHorizontal = () => {
  return (
    <div className={s.container}>

      <div className={s.imageDiv}>
        <img
          alt="recipe"
          src="https://i.pinimg.com/originals/0d/d5/ab/0dd5abc247ee3e519704df399ab3ddcf.jpg"
        />
      </div>

      <div className={s.infoDiv}>
        <div className={s.infoMainDiv}>
          <h3 className={s.title}>Titulo receta</h3>
          <p className={s.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fugiat recusandae incidunt natus pariatur obcaecati fuga quasi blanditiis, corrupti iste rerum sequi repellendus, possimus voluptatibus quidem molestiae iure facere ad.</p>
        </div>
        <div className={s.infoAuxDIv}>
            <p>⏱ 30'</p>
            <p>👨‍👩‍👦 3 personas</p>
            <p>📖 Difícil</p>
            <button className={s.button}>MÁS DETALLES</button>
        </div>
      </div>

    </div>
  );
};

export default RecipeCardHorizontal;
