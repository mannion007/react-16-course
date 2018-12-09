import React from 'react';

const Validation = (props) => {
    let min_length = 5;

    return (
        <p>{props.characters.length >= min_length ? 'Text Long Enough' : 'Text Too Short'}</p>      
    )
}

export default Validation
