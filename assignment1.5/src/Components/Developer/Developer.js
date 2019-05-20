import React from 'react';

const Developer = (props) => {
    return (
        <div>
            <div className="Developer">Name: {props.Name}, Role: {props.Role}</div>
        </div>
    );
}

export default Developer;