import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DeviceCategories extends Component {
  render() {
    return (
      <div>
        <h2>Device Categories</h2>
        <div className="fixed-action-btn">
          <Link to="/device-categories/add" className="btn-floating btn -large red">
          <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default DeviceCategories
