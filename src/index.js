import React from 'react';
import Router, {
  Route
} from 'react-router';

import routes from './config/routes';
import App from './App';

Router.run(
  routes,
  Router.HistoryLocation,
  function(Root) {
    React.render(<Root />, document.getElementById('app'))
  }
);
