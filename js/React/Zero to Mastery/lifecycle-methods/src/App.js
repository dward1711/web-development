import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LifeCycles} from './components/lifecycles.component.js';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      showChild: true,
      text: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button oncClick={
              /* Set the boolean operation to be reversed */
              () => this.setState(state => 
              ({ showChild: !state.showChild}))}>
              Toggle Lifecycles
            </button>
          </p>
          <button onClick={ () =>
                      /* Button to add text */
            this.setState(state => ({
              text: state.text + '_hello'
            }))
          }>
            Update Text
          </button>
          <p>
            <LifeCycles />
          </p>

        {this.state.showChid ? <LifeCycles text={this.state.text} /> : null }
        </header>
      </div>
    );
  }
}

export default App;
