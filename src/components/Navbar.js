import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-3">
            <div className="nav-wrapper">
                {/* <a href="/" className="brand-logo">React</a> */}
                <a data-activates="main-menu" className="button-collapse show-on-large">
                    <i className="fa fa-bars"></i>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/"><i className="fa fa-certificate"></i>Skills</Link></li>
                    <li><Link to="/employees"><i className="fa fa-users"></i>Employees</Link></li>
                    <li><Link to="/device-categories"><i className="fa fa-desktop"></i>Device Categories</Link></li>
                </ul>
                <ul className="side-nav" id="main-menu">
                    <li><Link to="/"><i className="fa fa-certificate"></i>Skills</Link></li>
                    <li><Link to="/employees"><i className="fa fa-users"></i>Employees</Link></li>
                    <li><Link to="/device-categories"><i className="fa fa-desktop"></i>Device Categories</Link></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
