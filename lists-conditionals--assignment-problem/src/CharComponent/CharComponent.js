import React from 'react';

const CharComponent = (props) => {
    return <div className="inline-box" onClick={props.click}>{props.char}</div>
}

export default CharComponent;