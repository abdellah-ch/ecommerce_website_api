import React from "react";

import Products from "../Products/Products";

import DetailProduct from "../DetailProduct/DetailProduct";

import Cart from "../Cart/Cart";

import Login from "../auth/Login";

import Register from "../auth/Register";

import { Route, Routes } from "react-router-dom";

import Notfound from "../Utils/Notfound/Notfound";

import Home from "../Home/Home";

function Pages() {
  return (
    <Routes>
      <Route path="/Products" element={<Products />} />

      <Route path="/Products/detail/:id" element={<DetailProduct />} />

      <Route path="/" element={<Home />} />

      <Route path="/Cart" element={<Cart />} />

      <Route path="/Login" element={<Login />} />

      <Route path="/Register" element={<Register />} />

      <Route path="*" element={<Notfound />} />
      
    </Routes>
  );
}

export default Pages;
