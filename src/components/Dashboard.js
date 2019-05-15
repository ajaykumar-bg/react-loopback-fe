import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../constants/ApiConstants'

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        skills: 0,
        employees: 0,
        deviceCategories: 0
      }
    }

    getSkillCount() {
      const { baseURL, SKILL_URL } = ApiConstants;
      axios.get(`${baseURL}${SKILL_URL}count`)
      .then(response => {
        this.setState({
          skills: response.data.count
        })
      })
      .catch(err => {
        console.log(err)
      });
    }

    getEmployeeCount() {
      const { baseURL, EMPLOYEE_URL } = ApiConstants;
      axios.get(`${baseURL}${EMPLOYEE_URL}count`)
      .then(response => {
        this.setState({
          employees: response.data.count
        })
      })
      .catch(err => {
        console.log(err)
      });
    }
    
    componentWillMount() {
        this.getSkillCount();
        this.getEmployeeCount();
    }
    
    
  render() {
      const {skills, employees, deviceCategories} = this.state;
    return (
      <div>
          <h3>Dashboard</h3>
          <div className="collection">
            <Link to="/skills" className="collection-item">
              <span className="badge">{skills}</span>Skills Added
            </Link>
            <Link to="/employees" className="collection-item">
              <span className="badge">{employees}</span>Employees
            </Link>
            <Link to="/device-categories" className="collection-item">
              <span className="badge">{deviceCategories}</span>Device Categories
            </Link>
          </div>
      </div>
    )
  }
}

export default Home
