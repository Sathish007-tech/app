import { h1 } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";
export default function Login(){
    return(
        
     
        <div className="bg">
        <div className="bg1"> 
        <h1>LogIn</h1>
        </div>
        <div className="bg11">
            <h3>--------------------OR-----------------------</h3>

        </div>
        <div className="bg111">
            <label htmlFor="">You have no account Create a new account</label><br />
            <Link to="/Signup" class="text-decoration-none">Signup</Link>
        </div>
       
        <div className="bg2">
                <center>
            <h3>Login your Account</h3>
            <form>
                <table>
                <tr>
                   <td>Email:</td>
                   <td><input type="email" placeholder="enter your email"/></td>
                </tr>
                <br />
                <tr>
                    <td>Password:</td>
                    <td><input type="password" placeholder="enter your password"/></td>
                </tr>
            </table>
            
            </form>
            <br /><br />
            
            </center>
            <div className="b1">
                <button className="button1">Login</button>
                
            </div>
             </div>
            </div>
    );
}