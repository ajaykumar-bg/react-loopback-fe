import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../../constants/ApiConstants'

class AddEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        employee: {}
      }
    }

    componentWillMount() {
    }

    addEmployee(newEmployee) {
      const { baseURL, EMPLOYEE_URL } = ApiConstants;
      axios.post(`${baseURL}${EMPLOYEE_URL}`, newEmployee)
      .then(response => {
        this.props.history.push('/employees');
      })
      .catch(err => {
        console.log(err)
      });
    }

    onSubmit = (event) => {
      const newEmployee = {
        employeeName: this.refs.employeeName.value,
        employeeId: this.refs.employeeId.value
      }
      event.preventDefault();
      this.addEmployee(newEmployee);
    }
    

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h3>Add Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input type="text" name="employeeName" ref="employeeName"></input>
            <label htmlFor="employeeName">Employee Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="employeeId" ref="employeeId"></input>
            <label htmlFor="employeeId">Employee Id</label>
          </div>
          <button className="btn" type="submit">Save</button>

        </form>
      </div>
    )
  }
}

export default AddEmployee
