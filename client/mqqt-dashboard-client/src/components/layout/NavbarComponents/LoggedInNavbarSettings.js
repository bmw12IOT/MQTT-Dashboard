import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


var LoggedInNavbarSettings = React.createClass({
  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton ><MoreVertIcon color="#fff"/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText={"Hello " } />
        <MenuItem primaryText="Sign out"  />
      </IconMenu>
    );
  }
});

module.exports = LoggedInNavbarSettings;