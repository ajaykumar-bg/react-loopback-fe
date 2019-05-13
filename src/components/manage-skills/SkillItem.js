import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SkillItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         item: props.item
      }
    }
    
  render() {
    const { id, name, version} = this.state.item;
    return (
        <li className="collection-item">
          <Link to={`/skills/${id}`}>
              { name } : {version}
          </Link>
        </li>
    )
  }
}

export default SkillItem
