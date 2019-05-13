import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../../constants/ApiConstants'

import EmployeeItem from './EmployeeItem'

class Employees extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      employees: []
    }
  }

  componentWillMount() {
    this.getEmployees();
  }

  getEmployees() {
    const { baseURL, EMPLOYEE_URL } = ApiConstants;
    axios.get(`${baseURL}${EMPLOYEE_URL}`)
    .then(response => {
      this.setState({
        employees: response.data
      })
    })
    .catch(err => {
      console.log(err)
    });
  }
  
  
  render() {
    const employeeItems = this.state.employees.map((employee ,index) => {
      return (
        <EmployeeItem key={employee.id} item={employee}/>
      );
    })
    return (
      <div>
        <h3>Manage Employee</h3>
        <ul className="collection">
          {employeeItems}
        </ul>
        <div className="fixed-action-btn">
          <Link to="/employees/add" className="btn-floating btn -large red">
          <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Employees
