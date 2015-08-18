import React from 'react';
import {
  RouteHandler
} from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>Main</h1>

        <RouteHandler />
      </div>
    )
  }
});

export default Main;
