import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";

export default function App() {
  return (
    <Routes>
      <Route exact path={"/home"} element={<Home />} />
      <Route exact path={"/createrecipe"} element={<CreateRecipe />} />
    </Routes>
  );
}
