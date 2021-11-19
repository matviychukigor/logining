import React from "react";
import { Link } from 'react-router-dom';

import "./nav.css";

const Navbar = ({login}) => {

    return(
        <div className="row col-12 d-flex justify-content-center text-white">
            <ul className="navbarItem">
                <li><Link className="text-white" to="/">Home</Link></li>
                <li><Link className="text-white" to="/other">Other</Link></li>
                <button className="btn btn-danger logOut" onClick={() => {login( true ) }}>Log Out</button>
            </ul>
        </div>
    )
}

export default Navbar;