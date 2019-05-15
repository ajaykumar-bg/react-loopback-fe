import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Dashboard from './Dashboard'
import NoMatch from './NoMatch'

import Skills from './manage-skills/Skills'
import AddSkill from './manage-skills/AddSkill'
import SkillDetails from './manage-skills/SkillDetails'
import EditSkill from './manage-skills/EditSkill'

import Employees from './manage-employees/Employees'
import AddEmployee from './manage-employees/AddEmployee'
import EmployeeDetails from './manage-employees/EmployeeDetails'
import EditEmployee from './manage-employees/EditEmployee'


import DeviceCategories from './DeviceCategories'
import About from './About'
import Login from './Login'
import Register from './Register'

export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/skills/add" component={AddSkill}/>
            <Route exact path="/skills/edit/:id" component={EditSkill}/>
            <Route exact path="/skills/:id" component={SkillDetails}/>


            <Route exact path="/employees" component={Employees}/>
            <Route exact path="/employees/add" component={AddEmployee}/>
            <Route exact path="/employees/edit/:id" component={EditEmployee}/>
            <Route exact path="/employees/:id" component={EmployeeDetails}/>

            <Route exact path="/device-categories" component={DeviceCategories}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route component={NoMatch}/>
        </Switch>
        
      </main>
    )
  }
}

export default Main
