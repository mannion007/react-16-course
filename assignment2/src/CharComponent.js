import React from 'react';

let Char = ( props ) => {
    return (
        <div onClick={props.onClickHandler} className="Character">{props.character}</div>
    )
}

export default Char
