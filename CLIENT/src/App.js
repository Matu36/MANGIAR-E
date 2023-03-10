import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import CreateUser from "./components/FormUser/formUser";
import Home from "./pages/Home/Home.jsx";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail.jsx";
import MyRecipes from "./components/MyRecipes/MyRecipes";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001/'
// axios.defaults.baseURL = [insertar URL del back deployado aquí]


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
        <Route exact path="/createRecipe" element={<CreateRecipe />} />
        <Route exact path="/myRecipes" element={<MyRecipes />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
}
