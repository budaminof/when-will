import React, { Component } from 'react';
import Head from './head/head';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { login } from '../actions';

class App extends Component {

  render() {

    const responseFacebook = (response) => {
      return this.props.login(response);
    }

    return (
      <div className="App">
        <Head />
        <FacebookLogin
          appId="110384006332451"
          autoLoad={ false }
          fields="name,email,picture"
          callback={ responseFacebook }
          cssClass="fb-button"
          icon="fa-facebook"
          textButton=" LogIn"
        />
      </div>
    );
  }
}

export default connect(null, {login})(App);
