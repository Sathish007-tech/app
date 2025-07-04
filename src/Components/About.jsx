import React from "react";
import { Link } from "react-router-dom";
export default function About(){
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
            <h1>Welcome to About Page</h1>
            <ul>
                <Link to="/">Home</Link>
            </ul>
            <ul>
                <Link to="/Update">Update</Link>
            </ul>
         
        </div>



        
    );
}