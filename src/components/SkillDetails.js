import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class SkillDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         details: {}
      }
    }

    componentDidMount() {
      this.getMeetUp();
    }
    

    getMeetUp() {
      let skillId= this.props.match.params.id;
      axios.get(`http://localhost:3000/api/skills/ ${skillId}`)
      .then(response => {
        this.setState({
          details: response.data
        })
      })
      .catch(err => {
        console.log(err)
      });
    }
    
  render() {
    const { name, version } = this.state.details;
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h1>{name} : {version}</h1>
        <ul className="collection">
          <li className="collection-item">Name: {name}</li>
          <li className="collection-item">Version: {version}</li>
        </ul>
      </div>
    )
  }
}

export default SkillDetails