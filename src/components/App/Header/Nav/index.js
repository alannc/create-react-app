import React, { Component } from 'react';

// import Third parties
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, withStyles } from '@material-ui/core';

const style = () => createStyles({
  root: {
    flexGrow: 1
  }
});

class NavComponent extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{margin: 0}}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export const Nav = withStyles(style)(NavComponent);
