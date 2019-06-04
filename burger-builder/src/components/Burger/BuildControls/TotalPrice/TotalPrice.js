import React from 'react';

const totalPrice = (props) => {
    return <p>Current Price: <strong>&pound;{( props.totalPrice / 100 ).toFixed(2)}</strong></p>
}

export default totalPrice;