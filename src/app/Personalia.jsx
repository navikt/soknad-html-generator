import React from 'react';

const spacing = {
    textAlign: 'center',
    display: 'inline-block',
    paddingBottom: '1rem',
};

const Personalia = (props) => {
    return (
        <div style={spacing}>
            <h2>{props.navn}</h2>
            {props.fnr}
        </div>
    );
};

export default Personalia;
