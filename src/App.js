import "./App.css";

import Login from "./components/login/Login";

import Category_page from "./components/category_pg/Category_page";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home_page/Home";


const App = () => {
  return (
 
      <div>
        <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/Category_page" element={<Category_page />}/> 
          <Route path="/Home" element={<Home />}/>
        </Routes>
        </BrowserRouter>
      </div>
  
  );
};

export default App;
 