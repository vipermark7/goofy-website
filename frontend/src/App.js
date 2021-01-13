import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
class Button extends React.Component {
  getInitialState() {
    return {
      counter: 0
    };
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
      
    </div>
  );
  
}
ReactDOM.render(<Button counter = 0/>, document.getElementById("root"));

export default App;
