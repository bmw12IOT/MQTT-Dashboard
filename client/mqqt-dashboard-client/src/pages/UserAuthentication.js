import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory } from 'react-router';


import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Login from '../components/userAuthentication/Login';
import Register from '../components/userAuthentication/Register';

import ConfigStore from '../stores/ConfigStore';



var UserAuthentication = React.createClass({
  getInitialState: function() {
    return {
      authenticationMethod: "login",
      transformUp: false,
      transformDown: false,
      AuthenticationMethodWrapperOpen: true,
      AuthenticationMethodWrapperHight: -1,
    };
  },

  componentWillMount: function() {
    this.updateURL();
  },

  componentDidMount: function() {
    let { clientHeight } = this.refs.AuthenticationMethodWrapper;
    this.setState({
      AuthenticationMethodWrapperHight: clientHeight,
    });
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (prevProps != this.props) {
      if (typeof this.props.routeParams !== "undefined") {
        this.updateURL();
      }
    }
  },

  updateURL() {
    if (typeof this.props.params.method !== "undefined") {
      if (this.props.params.method == "register") {
        this.setState({
          authenticationMethod: "register",
        });
      } else if(this.props.params.method == "login") {
        this.setState({
          authenticationMethod: "login",
        });
      } else {
        hashHistory.push('/userauthentication/login');
      }
    } else {
      hashHistory.push('/userauthentication/login');
    }
  },

  chageAuthenticationMethod() {
    console.log("change");
    this.setState({
      transformUp: true,
      transformDown: false,
      AuthenticationMethodWrapperOpen: false,
    });
    setTimeout(() => {
      if (this.state.authenticationMethod === "login") {
        hashHistory.push('/userauthentication/register');
      } else {
        hashHistory.push('/userauthentication/login');
      }
      this.setState({
        transformUp: false,
        transformDown: true,
        AuthenticationMethodWrapperOpen: true,
      });
      setTimeout(() => {
        this.setState({
          transformUp: false,
          transformDown: false,
        });
      }, 1000);
    }, 1000);
  },

  render() {
    return (
      <Paper zDepth={1} style={styles.userAuthenticationSiteStyle}>
        <div>
          <Paper zDepth={1} style={styles.userAuthenticationHeadStyle}>
            <h1 style={styles.userAuthenticationTitleStyle}>{(this.state.authenticationMethod === "register") ? "Register" : "Login"}</h1>
            <FloatingActionButton
              secondary={true}
              style={
                Object.assign(
                  styles.userAuthenticationChangeLoginRegisterButtonStyle,
                  ((this.state.transformUp) ?
                    styles.userAuthenticationChangeLoginRegisterButtonRotatingUpStyle
                    :
                    {}
                  ),
                  ((this.state.transformDown) ?
                    styles.userAuthenticationChangeLoginRegisterButtonRotatingDownStyle
                    :
                    {}
                  )
                )
              }
              onTouchTap={this.chageAuthenticationMethod}
            >
              <ContentAdd />
            </FloatingActionButton>
          </Paper>
        </div>
        <div
          ref="AuthenticationMethodWrapper"
          style={{
            overflow: "hidden",
            "max-height": (this.state.AuthenticationMethodWrapperOpen) ? (this.state.AuthenticationMethodWrapperHight != -1) ? this.state.AuthenticationMethodWrapperHight + "px" : "" : "0px",
            transition: "max-height 1s",
          }}
        >
          {(this.state.authenticationMethod === "register") ?
              <Register />
            :
              <Login />
          }
        </div>
      </Paper>
    );
  }
});

const styles = {
  userAuthenticationSiteStyle: {
    width: "60%",
    margin: "100px auto",
    minWidth: 280,
    maxWidth: 600,
  },
  userAuthenticationHeadStyle: {
    backgroundColor: ConfigStore.colors.primaryColor,
    padding: 10,
  },
  userAuthenticationTitleStyle: {
    marginBottom: 0,
    color: "#fff",
  },
  userAuthenticationChangeLoginRegisterButtonStyle: {
    backgroundColor: "#787",
    float: "right",
    marginRight: -30,
    marginTop: -20,
  },
  userAuthenticationChangeLoginRegisterButtonRotatingUpStyle: {
    transform: "rotateX(180deg)",
    transition: "transform 1s",
  },
  userAuthenticationChangeLoginRegisterButtonRotatingDownStyle: {
    transform: "rotateX(0deg)",
    transition: "transform 1s",
  },
};

module.exports = UserAuthentication;
