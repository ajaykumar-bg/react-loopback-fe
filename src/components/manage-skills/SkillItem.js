import React from 'react'
import { Link } from 'react-router-dom'

function SkillItem(props) {
  const { id, name, version} = props.item;
  return (
    <li className="collection-item">
      <Link to={`/skills/${id}`}>
        { name } : {version}
      </Link>
    </li>
  )
}

export default SkillItem
