import React from 'react';
import moment from 'moment';
import {
  Route,
  DefaultRoute,
  Redirect
} from 'react-router';

import App from './../App';
import TwoWeekPlan from './../components/TwoWeekPlan';

const Meals = React.createClass({
  render() {
    return (
      <h3>Meals</h3>
    );
  }
});

const ShoppingList = React.createClass({
  render() {
    return (
      <h3>ShoppingList</h3>
    );
  }
});

export default (
  <Route handler={App}>
    <Route name="meals" path="meals" handler={Meals} />
    <Route name="shopping_list" path="shopping-list" handler={ShoppingList} />
    <Route name="weekly_planner" path="weekly-planner/:date" handler={TwoWeekPlan} />

    <Redirect to="weekly_planner" params={{date: moment().format('YYYY-MM-DD')}} />
  </Route>
);
