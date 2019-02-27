import React from 'react';

const spacing = {
    textAlign: 'center',
    display: 'inline-block',
    paddingBottom: '1rem',
};

const Personalia = (props) => {
    const {navn, ...other} = props;
    const personalia = Object.values(other);

    return (
        <div style={spacing}>
            <h2>{navn}</h2>
            { personalia.map( (prop, index) => index != personalia.length - 1 ? prop + " // " : prop )}
        </div>
    );
};

export default Personalia;
