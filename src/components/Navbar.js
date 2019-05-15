import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../App.css'
import ApiConstants from '../constants/ApiConstants'
import StorageService from '../services/StorageService'

class Navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  clearStorage = () => {
    StorageService.clearStorage();
    this.props.history.push('/login');
  }
  
  logout() {
    const auth_token = StorageService.getAuthToken();
    const { baseURL, USER_URL } = ApiConstants;
    axios.post(`${baseURL}${USER_URL}logout?access_token=${auth_token}`, )
    .then(response => {
      this.clearStorage();
    })
    .catch(err => {
      this.clearStorage();
      console.log(err)
    });
  }
  
  render() {
    return (
      <div>
        <nav className="blue darken-3">
            <div className="nav-wrapper">
                {/* <a href="/" className="brand-logo">React</a> */}
                <Link to="/" data-activates="main-menu" className="button-collapse show-on-large">
                    <i className="fa fa-home fs-24px"></i>
                </Link>
                <ul className="right">
                  <li onClick={this.logout}><i className="fa fa-sign-out"></i>Logout</li>
                </ul>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/skills"><i className="fa fa-certificate"></i>Skills</Link></li>
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
