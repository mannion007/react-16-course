import React from 'react';
import Developer from '../../Developer/Developer';
import AuthContext from '../../../context/auth-context';

const styles = {
    border: "1px solid #ccc",
    width: "300px",
    margin: "10px auto",
    padding: "10px"
}

const Team = props => {

    

    return (
        <div className="Team" style={styles}>
            Name: {props.name}
            {
                props.members.map(
                    (member, index) => { return <Developer key={index} name={member.name} role={member.role} /> }
                )
            }
            <AuthContext.Consumer>
                { (context) => context.authenticated ? <input type="text" value={props.name} onChange={props.change} /> : null }
            </AuthContext.Consumer>
        </div>
    );
}

export default Team;