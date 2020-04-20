import React from "react"
import { Link } from "react-router-dom";
import "./menustyle.css"

const Menu = (props) => {
    return (

        <div className="navbar">
            <li><Link to="/">Home </Link></li>
            <li><Link to="About">About </Link></li>
            <li><Link to="Contact">Contact</Link> </li>


         </div>


    );
}

export default Menu;