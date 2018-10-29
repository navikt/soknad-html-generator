import React from 'react';
import Bolk from './Bolk';

const Bekreftelse = (props) => {
    return (
        <Bolk>
            <h4>{props.bekreftelse.tekst}</h4>
        </Bolk>
    );
};

export default Bekreftelse;