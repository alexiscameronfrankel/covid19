import React, { Component } from 'react';
import {Switch,Route,Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav class="nav-bar"> 
            {/* ul start in nav  */}
                <ul class="nav-bar-ul">
                    <li>Covid-19, Simplified</li> 
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#data">Data</Link></li>
                    <li><Link to="#faq">FAQ</Link> </li>
                    <li><Link to="#additional">Additional Resources</Link> </li>
                 </ul>
            </nav> 
        );
    }
}

export default Navbar;