import React from 'react';

const UserInput = ( props ) => {
    return (
        <div className="UserInput">
            Username: <input type="text" value={props.username} onChange={props.change}/>
        </div>
    )
}

export default UserInput