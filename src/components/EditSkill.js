import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class EditSkill extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         skill: {}
      }
    }

    componentDidMount() {
    }

    updateSkill(newSkill) {
      console.log(newSkill);
      axios.put(`http://localhost:3000/api/skills`, newSkill)
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err)
      });
    }

    onSubmit = (event) => {
      const newSkill = {
        name: this.refs.name.value,
        version: this.refs.version.value
      }
      event.preventDefault();
      this.updateSkill(newSkill);
    }
    

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h3>Edit Skill</h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input type="text" name="name" ref="name"></input>
            <label htmlFor="name">Skill Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="version" ref="version"></input>
            <label htmlFor="version">Version</label>
          </div>
          <button className="btn" type="submit">Save</button>

        </form>
      </div>
    )
  }
}

export default EditSkill
