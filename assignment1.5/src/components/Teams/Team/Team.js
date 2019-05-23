import React from 'react';
import Developer from '../../Developer/Developer';

const styles = {
    border: "1px solid #ccc",
    width: "300px",
    margin: "10px auto",
    padding: "10px"
}

const Team = (props) => {
    
    if (props.Name === "error") {
        throw new Error("Kablamo");
    }

    return (
        <div className="Team" style={styles}>
            Name: {props.name}
            {
                props.members.map(
                    (member, index) => { return <Developer key={index} name={member.name} role={member.role} /> }
                )
            }
            <input type="text" value={props.name} onChange={props.change}/>
        </div>
        
    );
}

export default Team;