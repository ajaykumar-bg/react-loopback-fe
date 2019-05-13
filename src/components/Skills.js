import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Skills extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       skills: []
    }
  }

  componentDidMount() {
    this.getSkills();
  }

  getSkills() {
    axios.get('http://localhost:3000/api/skills')
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
        <li className="collection-item" key={skill.id}>{skill.name}</li>
      );
    })
    return (
      <div>
        <h2>Skills</h2>
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
