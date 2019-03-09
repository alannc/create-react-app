import React, { Component } from 'react';
import Header from './Header';
import { OneColumn } from './Layout/OneColumn';
import { Login } from './Login';
import { MuiThemeProvider } from '@material-ui/core';

//Custom
import customTheme from '../../lib/material-ui/mui-theme';


class App extends Component {
  
  render() {
    return (
      <MuiThemeProvider theme={customTheme}>
        <Header></Header>
        <OneColumn>
          <Login/>
        </OneColumn>
      </MuiThemeProvider>
    );
  }
}

export default App;
