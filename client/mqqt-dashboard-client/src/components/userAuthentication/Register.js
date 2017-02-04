import React from 'react';
import Router from 'react-router';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import ConfigStore from '../../stores/ConfigStore';

const RegisterTitleStyle = {
  backgroundColor: ConfigStore.colors.primaryColor,
  padding: 10,
  color: "#fff"
};

const RegisterInputStyle = {
  width: "90%",
  marginLeft: "3%"
};

const underlineStyle = {
  color: ConfigStore.colors.primaryColorDark,
}

const floatingLabelStyle = {
  color: ConfigStore.colors.primaryColorDark,
  fontSize: 18
}

const registerButtonOverlayStyle = {
  backgroundColor: ConfigStore.colors.accentColor,
}

const registerButtonlabelStyle = {
  color: "#fff",
}

const registerButtonStyle = {
  width: "30%",
  marginLeft: "63%",
  marginBottom: "10px",
  marginTop: "10px",
}

const errorMsgstyle = {
  color: "red"
}





var Register = React.createClass({
  getInitialState: function() {
    return {
      valid: false,
      isUsernameTaken: false,
      username: "",
      password : "",
      passwordrep : "",
      name: "",
      lastname : "",
      passwordErrMsg: "",
      passwordrepErrMsg: "",
      usernameErrMsg: "",
    };
  },




  handleChangePassword(event) {
    this.setState({password: event.target.value});
    this.validatePassword(event.target.value);
    this.validatePasswordrep({passval: true, vall: event.target.value});
  },

  handleChangePasswordrep(event) {
    this.setState({passwordrep: event.target.value});
    this.validatePasswordrep({passval: false, vall: event.target.value});
  },

  handleChangeName(event) {
    this.setState({name: event.target.value});
  },

  handleChangeLastname(event) {
    this.setState({lastname: event.target.value});
  },


  render() {
    return (
      <Paper zDepth={1} id="register">
        <div>
          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangeUsername}
            value={this.state.username}
            className="RegisterInput"
            hintText="MaxMüller21"
            floatingLabelText="Benutzername"
            type="text"
            maxLength={40}
            id="usernameField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangeName}
            value={this.state.name}
            maxLength={40}
            className="RegisterInput"
            hintText="Max"
            floatingLabelText="Vorname"
            type="text"
            id="nameField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangeLastname}
            value={this.state.lastname}
            className="RegisterInput"
            hintText="Müller"
            maxLength={40}
            floatingLabelText="Nachname"
            type="text"
            id="lastnameField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangePassword}
            value={this.state.password}
            className="RegisterInput"
            hintText="geheimesPasswort21"
            floatingLabelText="Passwort"
            type="password"
            maxLength={200}
            id="passwordField"
          /><br />

          <TextField
            style={RegisterInputStyle}
            underlineStyle={underlineStyle}
            floatingLabelStyle={floatingLabelStyle}
            onChange={this.handleChangePasswordrep}
            value={this.state.passwordrep}
            className="RegisterInput"
            hintText="geheimesPasswort21"
            floatingLabelText="Passwort wiederholen"
            type="password"
            maxLength={200}
            id="passwordRepField"
          /><br />

          <RaisedButton
            style={registerButtonStyle}
            overlayStyle={registerButtonOverlayStyle}
            labelStyle={registerButtonlabelStyle}
            id="registerButton"
            type="register"
            label="Registrieren"
          />
        </div>
      </Paper>
    );
  }
});

const styles = {
  RegisterInputStyle: {
    width: "90%",
    marginLeft: "3%",
  },
}


module.exports = Register;
