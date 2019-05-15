import React from 'react'
import { Link } from 'react-router-dom'

function EmployeeItem(props) {
  const { id, employeeName, employeeId, designation, emailId} = props.item;
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

export default EmployeeItem