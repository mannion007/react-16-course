import React, { Component } from 'react';
import './App.css';
import Teams from '../components/Teams/Teams';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    showTeams: true,
    teams: [
      {
        id: 1,
        name: "rfrf",
        members: [
          {name: "James", role: "Backend Engineer"},
          {name: "Hristo", role: "Frontend Engineer"}
        ]
      },
      {
        id: 2,
        name: "Decisioning",
        members: [
          {name: "Tom", role: "Backend Engineer"},
          {name: "Emmet", role: "Frontend Engineer"}
        ]
      }
    ]
  }

  toggleTeamsHandler = () => this.setState({showTeams: !this.state.showTeams})

  nameChangeHandler = (event, id) => {
    const teamIndex = this.state.teams.findIndex((t) => { return t.id === id });

    const changedTeam = { ...this.state.teams[teamIndex] };
    changedTeam.name = event.target.value;

    const teams = [...this.state.teams];
    teams[teamIndex] = changedTeam;

    this.setState({ teams: teams });
  }

  render() {
    
    let teams = null;

    if (this.state.showTeams) {
      teams = <Teams teams={this.state.teams} changed={this.nameChangeHandler}/>
    }

    return (
      <div className="App">
        <Cockpit
          click={this.toggleTeamsHandler}
          showTeams={this.state.showTeams}
        />
        {teams}
      </div>
    );
  }
}

export default App;
