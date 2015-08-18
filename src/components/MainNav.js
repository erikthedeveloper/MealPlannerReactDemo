import React from 'react';
import {
  Navigation
} from 'react-router';
import {
  LeftNav,
  MenuItem
} from 'material-ui';

const menuItems = [
  {
    text: '2 Week Plan',
    route: '/'
  },
  {
    text: 'Meals',
    route: 'meals'
  },
  {
    text: 'Shopping List',
    route: 'shopping_list'
  }
];

const Header = React.createClass({

  mixins: [Navigation],

  toggle() {
    this.refs.leftNav.toggle()
  },

  onNavChange(event, key, payload) {
    this.transitionTo(payload.route);
  },

  render() {
    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        menuItems={menuItems}
        onChange={this.onNavChange}
        {...this.props}
        />
    );
  }
});

export default Header;
