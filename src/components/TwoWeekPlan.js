import React from 'react';

import moment from 'moment';
import {
  State,
  Navigation,
  Transition
} from 'react-router';
import {
  Styles,
  List,
  ListDivider,
  ListItem,
  DatePicker
} from 'material-ui';
import { shuffle } from 'lodash';

import IconButton from './IconButton';

function isNotSunday(date) {
  return date.getDay() !== 0;
}

const meals = ['Burritos', 'Taco Soup', 'Fajitas', 'Refried Beans', 'Hamburgers', 'Steak', 'Cheesecake', 'Hot Dogs', 'Curry', 'Chinese Takeout'];

const styles = {
  col4: {
    float: 'left',
    width: (4 / 12 * 100) + '%'
  },

  col6: {
    float: 'left',
    width: (6 / 12 * 100) + '%'
  }
};

const TwoWeekPlan = React.createClass({

  mixins: [State, Navigation],

  statics: {
    willTransitionTo(transition, params, query, callback) {
      const paramMoment = moment(params.date);

      if (paramMoment.day() !== 0) {
        transition.redirect('weekly_planner', {
          date: paramMoment.startOf('week').format('YYYY-MM-DD')
        });
      }

      callback();
    }
  },

  handleSelectDate(e, date) {
    this.transitionTo('weekly_planner', {
      date: moment(date).format('YYYY-MM-DD')
    });
  },

  openWeekPicker() {
    this.refs.week_picker.focus();
  },

  render() {
    const selectedMoment = moment(this.getParams().date);

    const listHeader = (
      <h3>
        Week of <strong>{selectedMoment.format('MMM Do')}</strong>
        <IconButton icon="calendar-alt" tooltip="Select Week" onClick={this.openWeekPicker} />
      </h3>
    );

    const randMeals = shuffle(meals).slice(Math.floor(Math.random() * meals.length) - 4);
    return (
      <div>
        <div style={styles.col6}>
          <List subheader={listHeader}>
            {randMeals.map(meal =>
              <div key={meal}>
                <ListItem
                  primaryText={meal}
                  leftIcon={<IconButton icon={Math.random() > 0.6 ? 'pizza' : 'cutlery'} />}
                />
                <ListDivider />
              </div>
            )}
          </List>
        </div>

        <div style={styles.col6}>
          <DatePicker
              ref="week_picker"
              value={selectedMoment.toDate()}
              onChange={this.handleSelectDate}
              autoOk={true}
              textFieldStyle={{display: 'none'}}
              shouldDisableDate={isNotSunday}
              />
        </div>
      </div>
    );
  }
});

export default TwoWeekPlan;
