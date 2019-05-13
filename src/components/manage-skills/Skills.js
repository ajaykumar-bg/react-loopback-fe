import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../../constants/ApiConstants'

import SkillItem from './SkillItem'

class Skills extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       skills: []
    }
  }

  componentWillMount() {
    this.getSkills();
  }

  getSkills() {
    const { baseURL, SKILL_URL } = ApiConstants;
    axios.get(`${baseURL}${SKILL_URL}`)
    .then(response => {
      this.setState({
        skills: response.data
      })
    })
    .catch(err => {
      console.log(err)
    });
  }
  
  
  render() {
    const skillItems = this.state.skills.map((skill ,index) => {
      return (
        <SkillItem key={skill.id} item={skill}/>
      );
    })
    return (
      <div>
        <h3>Manage Skills</h3>
        <ul className="collection">
          {skillItems}
        </ul>
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
