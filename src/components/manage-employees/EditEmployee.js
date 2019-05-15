import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../../constants/ApiConstants'

class EditEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id: '',
        employeeName: '',
        employeeId: '',
        designation: '',
        emailId: ''
      }
    }

    componentWillMount() {
      this.getEmployee();
    }

    getEmployee() {
      let employeeId = this.props.match.params.id;
      const { baseURL, EMPLOYEE_URL } = ApiConstants;
      axios.get(`${baseURL}${EMPLOYEE_URL}${employeeId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          employeeName: response.data.employeeName,
          employeeId: response.data.employeeId,
          designation: response.data.designation,
          emailId: response.data.emailId,
        })
      })
      .catch(err => {
        console.log(err)
      });
    }

    updateEmployee(newEmployee) {
      const { baseURL, EMPLOYEE_URL } = ApiConstants;
      axios.patch(`${baseURL}${EMPLOYEE_URL}`, newEmployee)
      .then(response => {
        this.props.history.push('/employees');
      })
      .catch(err => {
        console.log(err)
      });
    }

    onSubmit = (event) => {
      const newEmployee = {
        id: this.state.id,
        employeeName: this.refs.employeeName.value,
        employeeId: this.refs.employeeId.value,
        designation: this.refs.designation.value,
        emailId: this.refs.emailId.value
      }
      event.preventDefault();
      this.updateEmployee(newEmployee);
    }
    

  render() {
    const {employeeName, employeeId, designation, emailId} = this.state;
    return (
      <div>
        <br />
        <Link className="btn grey" to="/employees">Back</Link>
        <h3>Edit Employee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input type="text" name="employeeName" ref="employeeName" defaultValue={employeeName}></input>
            <label htmlFor="employeeName">Employee Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="employeeId" ref="employeeId" defaultValue={employeeId}></input>
            <label htmlFor="employeeId">Employee Id</label>
          </div>
          <div className="input-field">
            <input type="text" name="designation" ref="designation" defaultValue={designation}></input>
            <label htmlFor="designation">Designation</label>
          </div>
          <div className="input-field">
            <input type="text" name="emailId" ref="emailId" defaultValue={emailId}></input>
            <label htmlFor="emailId">Email Id</label>
          </div>
          <button className="btn" type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default EditEmployee
