import React from 'react';
import {
  RouteHandler
} from 'react-router';
import {
  Styles
} from 'material-ui';

import Header from './components/Header'
import MainNav from './components/MainNav'

const ThemeManager = new Styles.ThemeManager();
require("react-tap-event-plugin")();

const App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div>
        <Header
          toggleNavigation={() => this.refs.mainNav.toggle()}
          />
        <MainNav ref="mainNav" />

        <RouteHandler />
      </div>
    )
  }
});

export default App;
