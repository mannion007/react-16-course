import React from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'
import TotalPrice from '../BuildControls/TotalPrice/TotalPrice'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map(
        (ingredient) => {
            return <li key={ingredient}><span style={{ textTransform: 'capitalize' }}>{ingredient}</span> x {props.ingredients[ingredient]}</li>
        }
    )

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with your chosen ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <TotalPrice totalPrice={props.totalPrice} />
            <p>Continue to Checkout?</p>
            <Button type='Danger' click={props.cancel}>CANCEL</Button>
            <Button type='Success' click={props.continue}>CONTINUE</Button>
        </Aux>

    )
}

export default orderSummary