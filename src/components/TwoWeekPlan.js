import React from 'react';

import moment from 'moment';
import {
  Styles,
  List,
  ListDivider,
  ListItem
} from 'material-ui';

import Calendar from 'material-ui/lib/date-picker/calendar'

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
  render() {
    const selectedDate = moment()
      .add(2, 'days')
      .toDate();

    return (
      <div>
        <div style={styles.col6}>
          <List subheader="Meals for Week [...]">
            <ListItem primaryText="Foo Foo"/>
            <ListDivider />
            <ListItem primaryText="El Barro"/>
          </List>
        </div>

        <div style={styles.col6}>
          <Calendar
            mode="landscape"
            initialDate={selectedDate}
            />
        </div>
      </div>
    );
  }
});

export default TwoWeekPlan;
