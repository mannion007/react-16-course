import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <p>{props.Username}</p>
        </div>
    )
}

export default UserOutput;