import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    return (
      <div className="App">

        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </div>

        <FacebookLogin
          appId="110384006332451"
          autoLoad={ true }
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

export default App;
