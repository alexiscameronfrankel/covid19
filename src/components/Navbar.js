import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav> 
            {/* ul start in nav  */}
                <ul>
                    <li className="logo">Covid-19, Simplified</li> 
                    <li className="nav_items"><Link to="#about">About</Link></li>
                    <li className="nav_items"><Link to="#data">Data</Link></li>
                    <li className="nav_items"><Link to="#faq">FAQ</Link> </li>
                    <li className="nav_items"><Link to="#additional">Additional Resources</Link> </li>
                 </ul>
            </nav> 
        );
    }
}

export default Navbar;