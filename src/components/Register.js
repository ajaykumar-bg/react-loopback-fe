import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../constants/ApiConstants'

export class Register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    addUser(newUser) {
        const { baseURL, USER_URL } = ApiConstants;
        axios.post(`${baseURL}${USER_URL}`, newUser)
        .then(response => {
          this.props.history.push('/login');
        })
        .catch(err => {
          console.log(err)
        });
    }
  
    onRegister = (event) => {
        const newUser = {
            username: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        event.preventDefault();
        this.addUser(newUser);
    }
    
    
    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                <div className="row">
                    <form className="col s12" onSubmit={this.onRegister}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="username" ref="username" type="text" className="validate" />
                                <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" ref="email" type="email" className="validate" />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" ref="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <button type="submit" className="btn">Register now</button>
                        <p>Already have an Account? <Link to="/login">Login</Link></p>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
