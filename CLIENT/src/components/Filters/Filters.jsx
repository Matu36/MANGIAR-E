import React from "react";
import s from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { filterByDiet, setOrderBy, setSearchValueName } from "../../Redux/actions/index.js";



function Filters() {
  const dispatch = useDispatch();
  const orderBy = useSelector((state) => state.orderBy);
  const diets = useSelector((state) => state.diets);


  const orderSelectByAlphabetical = [
    { label: "", value: "" },
    { label: "A-Z", value: "A-Z" },
    { label: "Z-A", value: "Z-A" },
  ];

  const handleOrder = (e, { type }) => {
    let cache = { ...orderBy };

    if (orderBy.type !== type) cache.type = type;

    cache.order = e.value;

    dispatch(setOrderBy(cache));
  };

  const handleSearch = (event) => {
    dispatch(setSearchValueName(event.target.value));
  };

  const handleFilterbyDiet = (event) => {
    dispatch(filterByDiet(event.target.value));
  };

  return (
    <div className={s.container}>
      <Select
        className="selectOrder"
        options={orderSelectByAlphabetical}
        onChange={(e) => handleOrder(e, { type: "title" })}
      />
      <br></br>
      <input
        className="searchbar"
        type="text"
        placeholder="Search by name"
        onChange={handleSearch}
      />
      <h2>Order By:</h2>
      <select onChange={handleFilterbyDiet}>
        <option value=""></option>

        {diets &&
          diets.map((diet, indexkey) => {
            diet = diet[0].toUpperCase() + diet.slice(1);

            return (
              <option key={indexkey} value={diet}>
                {diet}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default Filters;
