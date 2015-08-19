import React from 'react';

import moment from 'moment';
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

const meals = ['Burritos', 'Taco Soup', 'Fajitas', 'Refried Beans', 'Hamburgers', 'Steak'];

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

  getInitialState() {
    return {
      selectedDate: moment().startOf('week').toDate()
    }
  },

  handleSelectDate(e, date) {
    this.setState({selectedDate: date});
  },

  openWeekPicker() {
    this.refs.week_picker.focus();
  },

  render() {
    const { selectedDate } = this.state;
    const selectedMoment = moment(selectedDate);

    const listHeader = (
      <h3>
        Week of <strong>{selectedMoment.format('MMM Do')}</strong>
        <IconButton icon="calendar-alt" tooltip="Select Week" onClick={this.openWeekPicker} />
      </h3>
    );

    const randMeals = shuffle(meals).slice(Math.floor(Math.random() * meals.length));

    return (
      <div>
        <div style={styles.col6}>
          <List subheader={listHeader}>
            {randMeals.map(meal =>
              <div key={meal}>
                <ListItem primaryText={meal} />
                <ListDivider />
              </div>
            )}
          </List>
        </div>

        <div style={styles.col6}>
          <DatePicker
              ref="week_picker"
              value={selectedDate}
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
