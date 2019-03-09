import React, { Component } from 'react';

// Third party
import { Paper, TextField, Typography, Button } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

const style = (theme) => createStyles({
  container: {
    padding: theme.spacing.unit * 4
  },
  title: {
    marginBottom: theme.spacing.unit * 2
  },
  buttonHolder: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  customButtom: {
    color: theme.palette.secondary.contrastText,
    marginTop: theme.spacing.unit * 5,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark
    }
  },
  googleButton: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    color: 'white',
    backgroundColor: theme.palette.googleColors.main,
    '&:hover': {
      backgroundColor: theme.palette.googleColors.dark
    }
  }
});

class LoginComponent extends Component {

  state = {
    name: '',
    email: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  responseGoogle = (response) => {
    console.log(response);
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        
        <Typography variant={'h4'} className={classes.title}>Login</Typography>
        <form noValidate autoComplete="off">
            <TextField
              fullWidth
              id="standard-name"
              label="Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
            />

          <TextField
            fullWidth
            id="standard-name"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
          />
          <Button fullWidth variant="contained" color="primary" className={classes.customButtom}>
            Login
          </Button>
          <GoogleLogin 
            clientId="491909505194-vl4g8o0l6soobm6fipkik30uutpsb29m.apps.googleusercontent.com"
            render={renderProps => (
              <Button 
                fullWidth
                variant="contained"
                onClick={renderProps.onClick}
                className={classes.googleButton}>
                Login with Google
              </Button>
            )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
      </form>
      </Paper>
    );
  }
}

export const Login = withStyles(style)(LoginComponent);
