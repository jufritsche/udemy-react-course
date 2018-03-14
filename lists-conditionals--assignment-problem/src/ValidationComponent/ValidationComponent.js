import React from 'react';

const ValidationComponent = (props) => {
    const pText = props.length > 5 ? 'Text is long enough' : 'Text is not long enough';
    return <p>{pText}</p>
}

export default ValidationComponent;