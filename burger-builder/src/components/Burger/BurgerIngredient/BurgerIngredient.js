import React from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
    
        const type = props.type;

        if (type === 'bread-bottom') {
            return <div className={classes.BreadBottom}></div>
        }

        if (type === 'bread-top') {
            return <div className={classes.BreadTop}><div className={classes.Seeds1}></div><div className={classes.Seeds2}></div></div>
        }

        if (type === 'meat') {
            return <div className={classes.Meat}></div>
        }

        if (type === 'cheese') {
            return <div className={classes.Cheese}></div>
        }

        if (type === 'salad') {
            return <div className={classes.Salad}></div>
        }

        if (type === 'bacon') {
            return <div className={classes.Bacon}></div>
        }
};

burgerIngredient.propTypes = {
    type: PropTypes.oneOf(['bread-bottom', 'bread-top', 'meat', 'cheese', 'salad', 'bacon'])
}

export default burgerIngredient;