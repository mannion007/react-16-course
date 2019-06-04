import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import TotalPrice from './TotalPrice/TotalPrice';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <TotalPrice totalPrice={props.totalPrice}/>
        {controls.map(control => (
            <BuildControl
                key = {control.label}
                label = {control.label}
                added = {() => props.ingredientAdded(control.type)}
                removed = {() => props.ingredientRemoved(control.type)}
                disableLess = {props.ingredients[control.type] === 0}
            />
        ))}
    </div>
);

export default buildControls;