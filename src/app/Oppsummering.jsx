import React from 'react';
import Bolk from './Bolk';

const Oppsummering = (props) => {
    return (
        <Bolk>
            <h4>{props.tekster['oppsummering.bekreftelse.label']}/></h4>
        </Bolk>
    );
};

export default Oppsummering;