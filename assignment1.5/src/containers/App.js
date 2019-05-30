import React, { Component } from 'react';
import styles from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Teams from '../components/Teams/Teams';
import AuthContext from '../context/auth-context';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      authenticated: false,
      showTeams: false,
      showCockpit: true,
      changeCounter: 0,
      teams: [
        {
          id: 1,
          name: "rfrf",
          members: [
            { name: "James", role: "Backend Engineer" },
            { name: "Hristo", role: "Frontend Engineer" }
          ]
        },
        {
          id: 2,
          name: "Decisioning",
          members: [
            { name: "Tom", role: "Backend Engineer" },
            { name: "Emmet", role: "Frontend Engineer" }
          ]
        },
        {
          id: 3,
          name: "Third",
          members: [
            { name: "Robinson", role: "Backend Engineer" },
            { name: "Joe", role: "Frontend Engineer" }
          ]
        }
      ]
    }
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    console.log(props);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  toggleTeamsHandler = () => this.setState({ showTeams: !this.state.showTeams })

  renameTeamHandler = (event, id) => {
    const teamIndex = this.state.teams.findIndex((t) => { return t.id === id });

    const changedTeam = { ...this.state.teams[teamIndex] };
    changedTeam.name = event.target.value;

    const teams = [...this.state.teams];
    teams[teamIndex] = changedTeam;

    this.setState(
      (prevState, props) => {
        return {
          teams: teams,
          changeCounter: prevState.changeCounter + 1
        }
      }
    );
  }

  hideCockpitHandler = () => {
    this.setState({ showCockpit: false });
  }

  toggleAuthenticatedHandler = () => {
    this.setState(

      (prevState, props) => {
        return {
          authenticated: !prevState.authenticated
        }
      }
    );
  }

  render() {

    console.log('[App.js] render');

    let teams = null;

    if (this.state.showTeams) {
      teams = <Teams teams={this.state.teams} changed={this.renameTeamHandler} />
    }

    return (
      <div className={styles.App}>
        <button onClick={this.hideCockpitHandler}>Remove Cockpit</button>
        <AuthContext.Provider value={{ authenticated: this.state.authenticated, authenticate: this.toggleAuthenticatedHandler }}>
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.title}
              click={this.toggleTeamsHandler}
              change={this.renameTeamHandler}
              showTeams={this.state.showTeams}
              teams={this.state.teams}
            />
          ) : null

          }
          {teams}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
