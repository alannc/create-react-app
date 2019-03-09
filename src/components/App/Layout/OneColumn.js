import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/core';

const style = (theme) => createStyles({
  container: {
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 4}px 0`
    }
  }
});

class OneColumnLayout extends Component {
  render() {
    const { classes, children } = this.props;
    return (
      <Grid container justify={'center'} alignItems={'center'} className={classes.container}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          {children}
        </Grid>
      </Grid>
    );
  }
}

export const OneColumn = withStyles(style)(OneColumnLayout);
