import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent';
import Char from './CharComponent';

class App extends Component {
  state = {characters: []}

  addCharacterHandler(event) {
    this.setState({content : event.target.value, characters : event.target.value.split("")})
  }

  removeCharacterHandler(charIndex) {
    let characters = [...this.state.characters]
    characters.splice(charIndex, 1)
    this.setState({characters: characters})
  }

  render() {
    let characterComponents = null;

      characterComponents = this.state.characters.map(
        (character, index) => {
          return <Char
            onClickHandler={() => this.removeCharacterHandler(index)}
            character={character}
            key={index}
          />
        }
      )

    return (
      <div className="App">
        <input type="text" value={this.state.characters.join("")} onChange={this.onTypeHanaddCharacterHandlerdler.bind(this)}/>
        <Validation characters={this.state.characters}/>
        <div id="Characters">{characterComponents}</div>
      </div>
    );
  }
}

export default App;
