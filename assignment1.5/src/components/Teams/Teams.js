import React from 'react';

import Team from './Team/Team';

const Teams = props => {

  let teams = null;

  teams = props.teams.map(
    (team, index) => <Team key={index} name={team.name} members={team.members} change={(event) => { props.changed(event, team.id) }} />
  );

  return teams;
}

export default Teams;