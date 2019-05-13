import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from './Dashboard'

import Skills from './manage-skills/Skills'
import AddSkill from './manage-skills/AddSkill'
import SkillDetails from './manage-skills/SkillDetails'
import EditSkill from './manage-skills/EditSkill'

import Employees from './Employees'
import DeviceCategories from './DeviceCategories'
import About from './About'

export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
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
