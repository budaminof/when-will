import React, { Component } from 'react';
import Head from './head/head';
import FacebookLogin from 'react-facebook-login';

class App extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
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

export default App;
