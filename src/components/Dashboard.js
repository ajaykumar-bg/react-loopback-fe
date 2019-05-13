import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
        axios.get('http://localhost:3000/api/skills/count')
        .then(response => {
        this.setState({
            skills: response.data.count
        })
        })
        .catch(err => {
        console.log(err)
        });
    }
    
    componentWillMount() {
        this.getSkillCount();
        // this.getDeviceCategoryCount();
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
