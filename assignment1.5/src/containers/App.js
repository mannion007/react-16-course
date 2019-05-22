import React, { Component } from 'react';
import './App.css';
import Team from '../components/Teams/Team/Team';


class App extends Component {

  state = {
    showTeams: true,
    teams: [
      {
        id: 1,
        Name: "rfrf",
        Members: [
          {
            Name: "James",
            Role: "Backend Engineer"

          },
          {
            Name: "Hristo",
            Role: "Frontend Engineer"

          }
        ]
      },
      {
        id: 2,
        Name: "Decisioning",
        Members: [
          {
            Name: "Tom",
            Role: "Backend Engineer"

          },
          {
            Name: "Emmet",
            Role: "Frontend Engineer"

          }
        ]
      },
      {
        id: 3,
        Name: "Revolving",
        Members: [
          {
            Name: "Joe",
            Role: "Backend Engineer"

          },
          {
            Name: "Robinson",
            Role: "Frontend Engineer"

          }
        ]
      }
    ]
  }

  toggleTeamsHandler() {
    this.setState({showTeams: !this.state.showTeams})
  }

  onChangeHandler(event, id) {
    const teamIndex = this.state.teams.findIndex((t) => { return t.id === id });

    const changedTeam = { ...this.state.teams[teamIndex] };
    changedTeam.Name = event.target.value;

    const teams = [...this.state.teams];
    teams[teamIndex] = changedTeam;

    this.setState({ teams: teams });
  }

  render() {

    let teams = [];

    if (this.state.showTeams) {
      teams = (
        this.state.teams.map(
          (team, index) => {
            return (
                <Team key={index} Name={team.Name} Members={team.Members} Change={(event) => { this.onChangeHandler(event, team.id) }} />
            )
          }
        )
      )
    }

    return (
      <div className="App">
        <button onClick={this.toggleTeamsHandler.bind(this)}>Toggle Teams</button>
        {teams}
      </div>
    );
  }
}

export default App;
