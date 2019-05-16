import React from 'react';

const UserInput = (props) => {

    const styles = {
        border: "3px solid #ccc"
    }


    return (
        <div>
            <input type="text" style={styles} id="UserInput" value={props.InitialValue} onChange={props.ChangeHandler}/>
        </div>
    )
}

export default UserInput;