import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class EditSkill extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id: '',
        name: '',
        version: ''
      }
    }

    componentWillMount() {
      this.getMeetUp();
    }

    getMeetUp() {
      let skillId = this.props.match.params.id;
      axios.get(`http://localhost:3000/api/skills/${skillId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          version: response.data.version
        })
      })
      .catch(err => {
        console.log(err)
      });
    }

    updateSkill(newSkill) {
      axios.put(`http://localhost:3000/api/skills`, newSkill)
      .then(response => {
        this.props.history.push('/skills');
      })
      .catch(err => {
        console.log(err)
      });
    }

    onSubmit = (event) => {
      const newSkill = {
        id: this.state.id,
        name: this.refs.name.value,
        version: this.refs.version.value
      }
      event.preventDefault();
      this.updateSkill(newSkill);
    }
    

  render() {
    const {name, version} = this.state;
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">Back</Link>
        <h3>Edit Skill</h3>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input type="text" name="name" ref="name" defaultValue={name}></input>
            <label htmlFor="name">Skill Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="version" ref="version" defaultValue={version}></input>
            <label htmlFor="version">Version</label>
          </div>
          <button className="btn" type="submit">Save</button>

        </form>
      </div>
    )
  }
}

export default EditSkill
