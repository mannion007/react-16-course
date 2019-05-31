import React from 'react';
import PropTypes from 'prop-types';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {

    const ingredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => {
                return <BurgerIngredient key={key + i} type={key} />
            });
        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {ingredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );

}

burger.propTypes = {
    ingredients: PropTypes.array
}

export default burger;