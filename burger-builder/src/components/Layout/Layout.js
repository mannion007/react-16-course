import React from 'react';

import Aux from '../../hoc/Aux/Aux';
import classes from '*.module.scss';

const layout = (props) => (
    <Aux>
        <div>Toobar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;