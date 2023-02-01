import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage/LandingPage";
import CreateUser from "./components/FormUser/formUser";
import Home from "./components/Home/Home.jsx";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";

export default function App() {
  return (
    <Routes>
      <Route exact path={"/home"} element={<Home />} />
      <Route exact path={"/createrecipe"} element={<CreateRecipe />} />
      <Route path="/" element={<LandingPage />} />
      <Route exact path="formUser" element={<CreateUser />} />
      <Route exact path="/recipes/id" element={<RecipeDetail />} />{" "} {/* ID estático solo para pruebas */}
    </Routes>
  );
}
