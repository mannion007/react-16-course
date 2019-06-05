import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 400,
        isPurchasable: false,
        isPurchasing: false,
    }

    addIngredientHandler = (type) => {
        this.setState(
            (prevState, _) => {
                let updatedIngredients = { ...this.state.ingredients }
                updatedIngredients[type] = prevState.ingredients[type] + 1

                return {
                    ingredients: updatedIngredients,
                    totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
                }
            }
        );

        this.updatePurchasable();
    }

    removeIngredientHandler = (type) => {
        this.setState(
            (prevState, _) => {
                if(prevState.ingredients[type] > 0) {
                    let updatedIngredients = { ...this.state.ingredients }
                    updatedIngredients[type] = prevState.ingredients[type] - 1
                    
                    return {
                        ingredients: updatedIngredients,
                        totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
                    }
                }
            }
        )

        this.updatePurchasable();
    }

    updatePurchasable = () => {
        this.setState(
            (prevState) => {
                let ingredientCount = Object.keys(prevState.ingredients)
                .map((key) => {return prevState.ingredients[key]} )
                .reduce((sum, element) => {return sum + element}, 0)
        
                return {isPurchasable: ingredientCount > 0}
            }
        )   
    }

    purchase = () => {
        this.setState(
            {isPurchasing: true}
        )
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.isPurchasing}><OrderSummary ingredients = {this.state.ingredients}/></Modal>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    ingredients = {this.state.ingredients}
                    totalPrice = {this.state.totalPrice}
                    isPurchasable = {this.state.isPurchasable}
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    purchase = {this.purchase}
                    />
            </Aux>
        );
    }
}

export default BurgerBuilder