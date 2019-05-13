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
    const { id, employeeName, employeeId} = this.state.item;
    return (
        <li className="collection-item">
          <Link to={`/employees/${id}`}>
              { employeeName } : {employeeId}
          </Link>
        </li>
    )
  }
}

export default EmployeeItem
