import React, { Component } from 'react';
import UserInput from './Components/UserInput/UserInput';
import UserOutput from './Components/UserOutput/UserOutput'
import './App.css';

class App extends Component {

  state = {
    username: "ElBarto"
  }

  onChangeHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      },
    )
  }

  render() {
    return (
      <div className="App">
        <UserInput InitialValue={this.state.username} ChangeHandler={this.onChangeHandler.bind(this)}/>
        <UserOutput Username={this.state.username}/>
      </div>
    );
  }
}

export default App;
