import React from "react";
import { Link } from "react-router-dom";
 
export default function Update(){
    return(
        
        <div style={{
            margin:"0%",
            background: "lightblue",
            textAlign: "center",
            height: "100vh",
            width:"100vw"
      }}>
        <br />
        <br />
        <br />
            <h1 >Welcome to Update</h1>
            <ul>
                <Link to="/">Home</Link>
            </ul>
            <ul>
                <Link to="/About">About</Link>
            </ul>






        </div>
      
    );



}