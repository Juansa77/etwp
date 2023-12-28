import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Products from "./pages/products/Products.jsx";
import YepannaPage from "./pages/yepannaPage/YepannaPage.jsx";
import JanaPage from "./pages/janaPage/JanaPage.jsx";
import NewHome from "./pages/newhome/NewHome.jsx"






ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/hogar-en-yepanna" element={<YepannaPage />} />
          <Route path="/jana-en-las-estrellas" element={<JanaPage />} />
          <Route path="/new-home" element={<NewHome />} />
        </Route>  
      </Routes>
      
    </BrowserRouter>

  </React.StrictMode>
);
