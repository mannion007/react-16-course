import React from 'react';

const Char = (props) => {
    return <div className="Char" onClick={props.click}>{props.input}</div>
}

export default Char;