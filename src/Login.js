import React, {Component} from 'react';
import firebase from 'firebase';
import RaisedButton from 'material-ui/RaisedButton';


var config = {
  apiKey: "AIzaSyD2VQ1dg74gcuh5lZgPulk1J9PUCT8Vs5s",
  authDomain: "dollar-talk.firebaseapp.com",
  databaseURL: "https://dollar-talk.firebaseio.com",
  projectId: "dollar-talk",
  storageBucket: "dollar-talk.appspot.com",
  messagingSenderId: "164600979912"
};
firebase.initializeApp(config);

var provider = new firebase
  .auth
  .GoogleAuthProvider();

class Login extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      isLoggedIn: false
    };
  }

  loginWithGoogle() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        this.setState({user: result.user, isLoggedIn: true});
      }.bind(this));
  };

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        this.setState({user: null, isLoggedIn: false});
      }.bind(this));
  };

  render() {
    const currentState = this.state;
    let userLogin;
    if (currentState.isLoggedIn) {
      userLogin = (
        <RaisedButton 
          label="Sign out"
          backgroundColor='#37474F'
          labelColor='#FAFAFA'
          onClick={this
          .logOut
          .bind(this)}></RaisedButton>
      )
    } else {
      userLogin = (
        <RaisedButton 
          label="Sign in with Google"
          backgroundColor='#37474F'
          labelColor='#FAFAFA'
          onClick={this
          .loginWithGoogle
          .bind(this)}></RaisedButton>
      )
    }
    return (
      <div>
        {userLogin}
      </div>
    )
  }
}

export default Login;

