import React, { Component } from 'react';
import './App.css';

import Validation from './Components/Validation/Validation';
import Char from './Components/Char/Char';

class App extends Component {

  state = {
    input: []
  }

  addCharacterHandler = (event) => {
    this.setState(
      {
        input: event.target.value.split("")
      }
    );
  }

  removeCharacterHandler = (index) => {
    const mutatedInput = [ ...this.state.input ]

    mutatedInput.splice(index, 1);

    this.setState(
      {
        input: mutatedInput
      }
    )
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.addCharacterHandler} />
        <p>{this.state.input.length}</p>
        <Validation message={this.state.input} />
        <div>
          {
            this.state.input.map((i, index) => {return <Char key={index} input={i} click={() => {this.removeCharacterHandler(index)}}/>})
          }
        </div>
      </div>
    );
  }
}

export default App;
