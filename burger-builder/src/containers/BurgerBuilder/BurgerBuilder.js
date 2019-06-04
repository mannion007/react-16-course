import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 40,
    meat: 130,
    bacon: 70,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            'bacon': 0,
            'cheese': 0,
            'meat': 0,
            'salad': 0,
        },
        totalPrice: 400
    }

    addIngredientHandler = (type) => {
        this.setState(
            (prevState, _) => {
                let updatedIngredients = { ...this.state.ingredients }
                updatedIngredients[type] = prevState.ingredients[type] + 1;

                return {
                    ingredients: updatedIngredients,
                    totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
                }
            }
        );
    }

    removeIngredientHandler = (type) => {
        this.setState(
            (prevState, _) => {
                if(prevState.ingredients[type] > 0) {
                    let updatedIngredients = { ...this.state.ingredients }
                    updatedIngredients[type] = prevState.ingredients[type] - 1;

                    return {
                        ingredients: updatedIngredients,
                        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
                    }
                }
            }
        );
    }

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    ingredients = {this.state.ingredients}
                    totalPrice = {this.state.totalPrice}
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;