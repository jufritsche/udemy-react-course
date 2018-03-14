import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="Useroutput">
            <p>Username: {props.username}</p>
            <p>I am the first paragraph</p>
            <p>I am the second paragraph</p>
            <p>{props.children}</p>
        </div>
    )
}

export default UserOutput;