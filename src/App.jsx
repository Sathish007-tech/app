import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import Update from "./Components/Update";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Update" element={<Update/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>

  );
}
