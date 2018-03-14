import React from 'react';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <label htmlFor="input">Input: </label>
            <input name="input" type="text" onChange={props.changed}/>
        </div>
    )
}

export default UserInput;