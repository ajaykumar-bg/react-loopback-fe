import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

import ApiConstants from "../constants/ApiConstants";
import StorageService from "../services/StorageService";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  loginUser(userCredentials) {
    const { baseURL, USER_URL } = ApiConstants;
    axios
      .post(`${baseURL}${USER_URL}/login`, userCredentials)
      .then(response => {
        StorageService.setAuthToken(response.data.id);
        console.log(response);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  }

  onLogin = event => {
    const userCredentials = {
      username: this.refs.username.value,
      password: this.refs.password.value
    };
    event.preventDefault();
    this.loginUser(userCredentials);
  };

  componentClicked = (response) => {
    console.log("componentClicked", response);
  }

  responseGoogle = (response) => {
      const user = {
        name: response.w3.ig,
        provider: "google",
        email: response.w3.U3,
        provider_id: response.El,
        token: response.Zi.access_token,
        provider_pic: response.w3.Paa
      }
    console.log("responseGoogle", user);
  }

  responseFacebook = (response) => {
    const user = {
        name: response.name,
        provider: "facebook",
        email: response.email,
        provider_id: response.id,
        token: response.accessToken,
        provider_pic: response.picture.data.url
      }
    console.log("responseFacebook", user);
  }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <div className="row">
          <form className="col s12" onSubmit={this.onLogin}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="username"
                  ref="username"
                  type="text"
                  className="validate"
                />
                <label htmlFor="username">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="password"
                  ref="password"
                  type="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
            <p>
              Dont't have an Account? <Link to="/register">Resister</Link>
            </p>
          </form>

          <div className="row">
            <GoogleLogin
              clientId="353047849820-cc4r0f57gdm56onir633v31b74ftpc00.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />

            <FacebookLogin
              appId="911222002550535"
              autoLoad={true}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
