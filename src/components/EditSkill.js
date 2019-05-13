import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EditSkill extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         skill: {}
      }
    }

    componentDidMount() {
    }
    

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h1>Edit Skill</h1>
      </div>
    )
  }
}

export default EditSkill
