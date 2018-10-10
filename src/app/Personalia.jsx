import React from 'react';

const spacing = {
    textAlign: 'center',
    display: 'inline-block',
    width: '60%'
};

const Personalia = (props) => {
    return (
        <div style={spacing}>
            <h2>{props.fnr}</h2>
        </div>
    );
};

export default Personalia;