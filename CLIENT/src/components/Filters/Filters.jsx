import React from "react";
import s from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  filterByDiet,
  setOrderBy,
} from "../../Redux/actions/index.js";

function Filters() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const orderBy = useSelector((state) => state.orderBy);
  const diets = useSelector((state) => state.diets);

  const orderSelectByAlphabetical = [
    { label: "Select Order Alphabetical", value: "" },
    { label: "A-Z", value: "A-Z" },
    { label: "Z-A", value: "Z-A" },
  ];

  const optionsDiets = diets.map((diet) => {
    diet = diet[0].toUpperCase() + diet.slice(1);
    return { label: diet, value: diet };
  });

  const handleOrder = (e, { type }) => {
    let cache = { ...orderBy };

    if (orderBy.type !== type) cache.type = type;

    cache.order = e.value;

    dispatch(setOrderBy(cache));
  };

  const handleFilterbyDiet = (event) => {
    dispatch(filterByDiet(event.value));
  };

  return (
    <div className={s.container}>
      <Select
        className={s.SelectByDiets}
        options={optionsDiets}
        onChange={(e) => handleFilterbyDiet(e)}
        placeholder="Order By Diets"
      />
      <Select
        className="selectOrder"
        options={orderSelectByAlphabetical}
        onChange={(e) => handleOrder(e, { type: "title" })}
        placeholder="Order By Alphabetical"
      />
      
    </div>
  );
}

export default Filters;
