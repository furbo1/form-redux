import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";


class Header extends React.Component {
    render(){
        return(
          <div>
          <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo right">Logo</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        </div>

       
        )
    }
}

export default Header