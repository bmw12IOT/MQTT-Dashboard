import React from 'react';
import AppBar from 'material-ui/AppBar';

import LoggedInNavbarSettings from './NavbarComponents/LoggedInNavbarSettings'
import LoggedOutNavbarSettings from './NavbarComponents/LoggedOutNavbarSettings'



const navbartStyle = {
  position: 'fixed',
};

const placeholderStyle = {
  marginTop: 65,
  display: "inline-block",
};

/**
 *
 * Top navigation
 *
 */
var Navbar = React.createClass({
  getInitialState: function() {
    return {
      logedIn: true,
    };
  },


  render() {
    return (
      <div>
        <AppBar
          title="FoodMood"
          style={navbartStyle}
          zDepth={2}
          iconElementRight={this.state.logedIn ? <LoggedInNavbarSettings username={this.state.username}/> : <LoggedOutNavbarSettings />}
        />
        <div style={placeholderStyle}></div>
      </div>
    );
  }
});

module.exports = Navbar;
