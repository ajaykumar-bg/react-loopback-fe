import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import Skills from './Skills'
import About from './About'

export class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route exact path="/" component={Skills}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/about" component={About}/>
            {/* <Route path="/:user" component={User}/>
            <Route component={NoMatch}/> */}
        </Switch>
        
      </main>
    )
  }
}

export default Main
