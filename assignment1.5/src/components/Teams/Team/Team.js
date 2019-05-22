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
            Name: {props.Name}
            {
                props.Members.map(
                    (member, index) => { return <Developer key={index} Name={member.Name} Role={member.Role} /> }
                )
            }
            <input type="text" value={props.Name} onChange={props.Change}/>
        </div>
        
    );
}

export default Team;