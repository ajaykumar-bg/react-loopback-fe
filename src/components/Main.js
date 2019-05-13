import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Skills from './Skills'
import AddSkill from './AddSkill'
import SkillDetails from './SkillDetails'
import EditSkill from './EditSkill'

import Employees from './Employees'
import DeviceCategories from './DeviceCategories'
import About from './About'

export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={Skills}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/skills/add" component={AddSkill}/>
            <Route exact path="/skills/edit/:id" component={EditSkill}/>
            <Route exact path="/skills/:id" component={SkillDetails}/>
            <Route path="/employees" component={Employees}/>
            <Route path="/device-categories" component={DeviceCategories}/>
            <Route path="/about" component={About}/>
            {/* <Route path="/:user" component={User}/>
            <Route component={NoMatch}/> */}
        </Switch>
        
      </main>
    )
  }
}

export default Main
