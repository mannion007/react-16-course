import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(
        (ingredient) => {
            return <li key={ingredient}><span style={{textTransform:'capitalize'}}>{ingredient}</span> x {props.ingredients[ingredient]}</li>
        }
    )

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with your chosen ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
}

export default orderSummary;