import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Skills extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        <div className="fixed-action-btn">
          <Link to="/skills/add" className="btn-floating btn -large red">
          <i className="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Skills
