import React from 'react';

import Team from './Team/Team';

const Teams = (props) => 
    props.teams.map(
        (team, index) => {
          return <Team key={index} name={team.name} members={team.members} change={(event) => { props.changed(event, team.id) }} />
        }
      );

export default Teams;