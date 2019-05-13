import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Employees extends Component {
  render() {
    return (
      <div>
        <h2>Employees</h2>
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
