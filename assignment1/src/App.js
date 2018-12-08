import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput';
import UserInput from './UserInput';

class App extends Component {
  state = {username: "mannion007"}

  updateUsernameHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput username={this.state.username} change={this.updateUsernameHandler}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
