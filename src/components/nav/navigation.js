import React from "react";
import { Link } from 'react-router-dom';

const Navbar = ({login}) => {

    if(!login){
        return <li><Link className="text-white" to="/login">Login</Link></li>
    }
    return(
        <div className="row col-12 d-flex justify-content-center text-white">
            <ul className="navbarItem">
                <li><Link className="text-white" to="/">Home</Link></li>
                <li><Link className="text-white" to="/other">Other</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;