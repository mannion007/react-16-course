import React from 'react';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>This is the first paragraph</p>
            <p>This is the second paragraph</p>
            <p>{props.username}</p>
        </div>
    )
}

export default userOutput