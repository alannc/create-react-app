import React, { Component } from 'react';

import { CustomButton } from './components/customButton';
import { CustomSelect } from './components/customSelect';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      simpleValue: 'Hola',
      greeting: 'Welcome'
    };
    console.log('app constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  handleClick = () => {
    const text = this.state.simpleValue;
    this.setState({
      simpleValue: (text === 'Hola') ? 'Adios' : 'Hola'
    });
  }

  handleGreeting = () => {
    const text = this.state.greeting;
    this.setState({
      greeting: (text === 'Welcome') ? 'Good Bye' : 'Welcome'
    });
  }
  
  render() {

    return (
      <div>        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        {this.state.simpleValue}
        <CustomButton
          actionOnClick={this.handleClick}
          text={this.state.simpleValue}
        />
        <CustomButton
          actionOnClick={this.handleGreeting}
          text={this.state.greeting}
        />
        <CustomSelect />
        {/* <button onClick={this.handleClick}>BUTTON 2</button> */}
      </div>
    );
  }
}

export default App;
