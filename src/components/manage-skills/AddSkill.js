import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../../constants/ApiConstants'

class AddSkill extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         skill: {}
      }
    }

    componentWillMount() {
    }

    addSkill(newSkill) {
      const { baseURL, SKILL_URL } = ApiConstants;
      axios.post(`${baseURL}${SKILL_URL}`, newSkill)
      .then(response => {
        this.props.history.push('/skills');
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
      this.addSkill(newSkill);
    }
    

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/skills">Back</Link>
        <h3>Add Skill</h3>
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

export default AddSkill
