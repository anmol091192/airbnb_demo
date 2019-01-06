import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../components/Typography';
import AppForm from '../views/AppForm';
import { email, required } from '../form/validation';
import RFTextField from '../form/RFTextField';
import FormButton from '../form/FormButton';
import FormFeedback from '../form/FormFeedback';
import Link from '../next/Link';

const styles = theme => ({
    box: {
        position: 'absolute',
        left: 550,
        top: 150,
        borderRadius: 50,
    }
});


class SearchWindow extends React.Component{
        
    state = {
        sent: false,
      };
    
      validate = values => {
        const errors = required(['firstName', 'lastName', 'email', 'password'], values, this.props);
    
        if (!errors.email) {
          const emailError = email(values.email, values, this.props);
          if (emailError) {
            errors.email = email(values.email, values, this.props);
          }
        }
    
        return errors;
      };
    
      handleSubmit = () => {};

        render(){
            const { classes } = this.props;
            const { sent } = this.state;
            return (
                <div className={classes.box}>
                     <AppForm>
                       <React.Fragment>
                        <Typography variant="h4" gutterBottom  align="left">
                        Book unique homes and experiences.
                        </Typography>
                        </React.Fragment>
                        <Form
                            onSubmit={this.handleSubmit}
                            subscription={{ submitting: true }}
                            validate={this.validate}
                        >
                            {({ handleSubmit, submitting }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={16}>
                                <Grid item xs={12} sm={12}>
                                    <Field
                                    component={RFTextField}
                                    fullWidth
                                    label="Where"
                                    name="where"
                                    required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Field
                                    component={RFTextField}
                                    disabled={submitting || sent}
                                    fullWidth
                                    label="Check In"
                                    margin="normal"
                                    name="checkin"
                                    type='date'
                                    />
                                </Grid>
                                </Grid>
                                    <Field
                                    component={RFTextField}
                                    disabled={submitting || sent}
                                    fullWidth
                                    label="Check In"
                                    margin="normal"
                                    name="checkin"
                                    type='date'
                                    />
                                    <Field
                                    fullWidth
                                    component={RFTextField}
                                    disabled={submitting || sent}
                                    name="guests"
                                    label="Guests"
                                    type="select"
                                    margin="normal"
                                    />
                                <FormSpy subscription={{ submitError: true }}>
                                {({ submitError }) =>
                                    submitError ? (
                                    <FormFeedback className={classes.feedback} error>
                                        {submitError}
                                    </FormFeedback>
                                    ) : null
                                }
                                </FormSpy>
                                <FormButton
                                className={classes.button}
                                disabled={submitting || sent}
                                color="secondary"
                                fullWidth
                                >
                                {submitting || sent ? 'In progress…' : 'Search'}
                                </FormButton>
                            </form>
                            )}
                        </Form>
                    </AppForm>
                </div>
            );
        }
}

SearchWindow.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SearchWindow);