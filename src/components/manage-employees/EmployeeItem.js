import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeeItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         item: props.item
      }
    }
    
  render() {
    const { id, employeeName, employeeId, designation, emailId} = this.state.item;
    return (
        <li className="collection-item avatar">
          <Link to={`/employees/${id}`}>
            <i className="fa fa-user circle"></i>
            <span className="title">{ employeeName } : {employeeId}</span>
            <p>{ designation } <br/>
              { emailId }
            </p>
          </Link>
          <Link to={`/employees/edit/${id}`} className="secondary-content"><i className="fa fa-pencil"></i></Link>
        </li>
    )
  }
}

export default EmployeeItem
