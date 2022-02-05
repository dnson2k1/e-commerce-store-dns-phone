import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import NotFound from "../components/NotFound";
import Catalog from "../pages/Catalog";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Login from "../components/Login";
import Register from "../components/Register";
const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route exact path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:slug" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
