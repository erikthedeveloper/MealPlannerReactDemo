import React from 'react';
import {
  AppBar
} from 'material-ui';

const Header = React.createClass({
  propTypes: {
    toggleNavigation: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <AppBar
        title="MealPlanner"
        onLeftIconButtonTouchTap={this.props.toggleNavigation}
        />
    );
  }
});

export default Header;
