import React, { Component } from 'react';

// Third parties
import { createStyles, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import UpdateFilled from '@material-ui/icons/Update';

const styles = () =>
  createStyles({
    customButton: {
      backgroundColor: '#4CAF50',
      color: 'white'
    },
    icon: {
      margin: '0 8px'
    }
  });

class CustomButtonComponent extends Component {

  constructor(props) {
    super(props);
    console.log('custom Constructor')
  }

  componentDidMount() {
    console.log('componentDidMount BUTTON');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate BUTTON');
  }

  componentWillMount() {
    console.log('componentWillMount BUTTON');
  }
  
  render() {
    console.log(this.props); // classes, actionOnClick
    const { classes, actionOnClick } = this.props;
    console.log(classes);
    return (
      <Button className={classes.customButton} variant="contained" color="primary" onClick={actionOnClick}>
        {this.props.text}
        <UpdateFilled className={classes.icon} />
      </Button>
    );
  }
}

export const CustomButton = withStyles(styles)(CustomButtonComponent);