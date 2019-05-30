import React from 'react';

const authContext = React.createContext(
    {
        authenticated: false,
        authenticate: ()=>{} // better autocomplete
    }
);

export default authContext;