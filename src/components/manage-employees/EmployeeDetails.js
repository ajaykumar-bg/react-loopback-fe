import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../../constants/ApiConstants'

class EmployeeDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         details: {}
      }
    }

    componentWillMount() {
      this.getEmployee();
    }
    

    getEmployee() {
      let employeeId= this.props.match.params.id;
      const { baseURL, EMPLOYEE_URL } = ApiConstants;
      axios.get(`${baseURL}${EMPLOYEE_URL}${employeeId}`)
      .then(response => {
        this.setState({
          details: response.data
        })
      })
      .catch(err => {
        console.log(err)
      });
    }

    onDelete = () => {
      let employeeId= this.state.details.id;
      const { baseURL, EMPLOYEE_URL } = ApiConstants;
      axios.delete(`${baseURL}${EMPLOYEE_URL}${employeeId}`)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      });
    }
    
  render() {
    const { id, employeeName, employeeId } = this.state.details;
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h3>{employeeName} : {employeeId}</h3>
        <ul className="collection">
          <li className="collection-item">Name: {employeeName}</li>
          <li className="collection-item">Emp_ID: {employeeId}</li>
        </ul>
        <Link className="btn" to={`/employees/edit/${id}`}>Edit</Link>
        <button className="btn red right" onClick={this.onDelete}>Delete</button>
      </div>
    )
  }
}

export default EmployeeDetails
