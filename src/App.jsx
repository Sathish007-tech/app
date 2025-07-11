import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AboutUs from "./Components/AboutUs"
import NotFound from "./Components/NotFound";
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>

  );
}
