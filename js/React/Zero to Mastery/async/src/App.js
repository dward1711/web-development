import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      meaningOfLife: 47
    };
  }

  /* Asynchronous Call back create a second parameter, in this case, console.log */
handleClick = () => {
  this.setState((prevState, prevProps) => {
    return { meaningOfLife: this.state.meaningOfLife + 1}
  },
  () => console.log(this.state.meaningOfLife)
  )
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.meaningOfLife }
          </p>
          <button
          /*Create the onClick function*/
            onClick={this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  

  }
}

export default App;
