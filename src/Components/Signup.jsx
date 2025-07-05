import React from "react";
import { div, h1 } from "framer-motion/client";
import { Link } from "react-router-dom";

export default function Signup(){
    return(
        <div className="s">
            <div className="ss">
                <h1>Signup</h1>
            </div>
        <div className="s1">
            <h2>Create your new account</h2>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Name" />
            <br />
            <label htmlFor="">Your E-mail</label>
            <input type="text" placeholder="Enter E-mail"/>
            <br />
            <label htmlFor="">Create Paasword</label>
            <input type="password" placeholder="At least 8 characters"/>
            <br />
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder="Re-enter Your Password"/>
            <br />
            <div className="c1">
            <input type="checkbox" />
            <label htmlFor="">I agree to all Term&privacy policy and Fees.</label>
            </div>
            <div >
                <button id="b11">SignUp </button>
            </div>
        </div>
        <div className="H1">
        <label htmlFor="">Have an Account..?</label>
        <Link to="/Login">Sign-in</Link>
        </div>

        </div>
 );
}