import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage/LandingPage";
import CreateUser from './components/FormUser/formUser';

export default function App() {
  return (
<Routes>    

<Route path="/" element={<LandingPage />} />
<Route exact path="formUser" element={<CreateUser/>} />
</Routes>  
);
}

