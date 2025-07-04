import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <div >
            <form>
                <label htmlFor="Email">Email:</label>
                <input type="email" placeholder="enter your Eamil" /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="enter your password" /><br /><br />
                <button><button type="submit" class="btn btn-primary">Submit</button></button>




            </form>
        <br />
        <br />
        <br />

        <ul>
            <Link to="/Update">Update</Link>
        </ul>
        <ul>
            <Link to="/About">About</Link>
        </ul>

        </div>
    );



}