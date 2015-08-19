import React from 'react';
import { IconButton as MuiIconButton } from 'material-ui';

const IconButton = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired
  },

  render() {
    const {icon, ...others} = this.props;
    return (
      <MuiIconButton
        iconClassName={`zmdi zmdi-${icon}`}
        {...this.props}
        />
    )
  }
});

export default IconButton;
