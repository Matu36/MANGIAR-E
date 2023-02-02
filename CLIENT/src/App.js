import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/LandingPage/LandingPage";
import CreateUser from "./components/FormUser/formUser";
import Home from "./pages/Home/Home.jsx";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path={"/home"} element={<Home />} />
        <Route exact path={"/home"} element={<NavBar />} />
        <Route exact path={"/createrecipe"} element={<CreateRecipe />} />
        <Route path="/" element={<LandingPage />} />
        <Route exact path="formUser" element={<CreateUser />} />
        <Route exact path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </>
  );
}
