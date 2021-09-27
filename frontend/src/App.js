import './App.css';
import React from 'react';
import { Button } from 'react-materialize';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }      
  render() {
    return (
      <div>
        <div id='counter'>{this.state.counter}</div>
        <button onClick={this.increment}> Add 1 </button>
        <button onClick={this.decrement}> Minus 1 </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to Shelby and Shaffan's goofy website!</h1>

      <p>Bet you can't click this button a million times!</p>
      <Counter />
      <Button waves="light">
              We are using Materialize!
      </Button>
    </div>
  );
}

export default App;
