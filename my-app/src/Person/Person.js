import React from 'react';

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm Person {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;