import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

class Navbar extends Component {
    // jquery is loaded when component mounts...pay attention to .show in app.css
    componentDidMount() {
        $(document).ready(function(){
          $('.btn').click(function(){
            $('.nav_items').toggleClass("show");
            // $('ul li').toggleClass("hide");
          });
        });
    }
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
                    <li className="btn"><i><FontAwesomeIcon icon={ faBars }/></i></li>
                 </ul>
            </nav> 
           
        );
    }
}

export default Navbar;