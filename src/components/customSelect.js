import React, { Component } from 'react';

// Third parties
import { createStyles, withStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const styles = () =>
  createStyles({
  });

class CustomSelectComponent extends Component {
  state = {
    age: '',
  };
    
  handleChange = event => {
    this.setState({ age: event.target.value });
  };
  
  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
          Age
        </InputLabel>
        <Select
          value={this.state.age}
          onChange={this.handleChange}
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export const CustomSelect = withStyles(styles)(CustomSelectComponent);