import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  card: {
    display: 'flex',
    width: 50
  }
});

function MediaControlCard(props) {
  return <Card {...props} />;
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);