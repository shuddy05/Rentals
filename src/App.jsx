import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register"
import ForgotPassword from "./Pages/ForgetPassword";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import DetailedProperties from "./Components/DetailedProperties";
const App = () => {
  return (
  
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail" element={<DetailedProperties />} />

        <Route path="/properties" element={<Properties />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
