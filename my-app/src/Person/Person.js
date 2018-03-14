import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    return (
        <div className={classes.person}>
            <p onClick={props.click}>I'm Person {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Person;