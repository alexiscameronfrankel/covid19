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
          });
          $('.routeChange').click(function(){
            console.log('button is being pressed and should change route')
            $('.nav_items').toggleClass("show");
          });
        });
    }

    changeRoute
    
    render() {
        return (
        
            <nav> 
            {/* ul start in nav  */}
                <ul>
                    <li className="logo">Covid-19, Simplified</li> 
                    <li className="nav_items"><Link to="#about" className="routeChange">About</Link></li>
                    <li className="nav_items"><Link to="#data" className="routeChange">Data</Link></li>
                    <li className="nav_items"><Link to="#faq" className="routeChange">FAQ</Link> </li>
                    <li className="nav_items"><Link to="#additional" className="routeChange">Additional Resources</Link> </li>
                    <li className="btn"><i><FontAwesomeIcon icon={ faBars }/></i></li>
                 </ul>
            </nav> 
           
        );
    }
}

export default Navbar;