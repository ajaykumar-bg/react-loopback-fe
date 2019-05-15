import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ApiConstants from '../constants/ApiConstants'
import StorageService from '../services/StorageService'

export class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    loginUser(userCredentials) {
        const { baseURL, USER_URL } = ApiConstants;
        axios.post(`${baseURL}${USER_URL}/login`, userCredentials)
        .then(response => {
            StorageService.setAuthToken(response.data.id);
            console.log(response)
            this.props.history.push('/dashboard');
        })
        .catch(err => {
          console.log(err)
        });
    }
  
    onLogin = (event) => {
        const userCredentials = {
            username: this.refs.username.value,
            password: this.refs.password.value
        }
        event.preventDefault();
        this.loginUser(userCredentials);
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <div className="row">
                    <form className="col s12" onSubmit={this.onLogin}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="username" ref="username" type="text" className="validate" />
                                <label htmlFor="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" ref="password" type="password" className="validate" />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p>Dont't have an Account? <Link to="/register">Resister</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
