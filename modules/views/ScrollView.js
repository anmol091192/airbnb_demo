import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '../components/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });

  function ScrollView(props){
      const { classes,theme } = props;

      return (
            <Card position="absolute">
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Live From Space
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                    </Typography>
                    </CardContent>
                    
                </div>
                <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                />
            </Card>
      );
  }

  ScrollView.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ScrollView);