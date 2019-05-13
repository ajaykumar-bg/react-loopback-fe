import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../../constants/ApiConstants'

class SkillDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         details: {}
      }
    }

    componentWillMount() {
      this.getSkills();
    }
    

    getSkills() {
      let skillId= this.props.match.params.id;
      const { baseURL, SKILL_URL } = ApiConstants;
      axios.get(`${baseURL}${SKILL_URL}${skillId}`)
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
      let skillId= this.state.details.id;
      const { baseURL, SKILL_URL } = ApiConstants;
      axios.delete(`${baseURL}${SKILL_URL}${skillId}`)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      });
    }
    
  render() {
    const { id, name, version } = this.state.details;
    return (
      <div>
        <br />
        <Link className="btn grey" to="/skills">Back</Link>
        <h3>{name} : {version}</h3>
        <ul className="collection">
          <li className="collection-item">Name: {name}</li>
          <li className="collection-item">Version: {version}</li>
        </ul>
        <Link className="btn" to={`/skills/edit/${id}`}>Edit</Link>
        <button className="btn red right" onClick={this.onDelete}>Delete</button>
      </div>
    )
  }
}

export default SkillDetails
