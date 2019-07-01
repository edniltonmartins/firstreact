import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    contador: 0
  }
  contador = 10
  increment = () =>{
    this.setState( {contador : this.state.contador + 1} );
    console.log(this.state.contador);
  }
  decrement = () =>{
    this.setState({ contador: this.state.contador - 1});
    console.log(this.state.contador);
  }

  clear = () =>{
    this.setState({
      contador: 0
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        Contador: {this.state.contador}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.clear}>Clear</button>
        </header>
    </div>
  );
}
}

export default App;
