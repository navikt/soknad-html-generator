import React from 'react';
import Bolk from './Bolk';

const Bekreftelse = (props) => {
    return (
        <Bolk>
            <h4 dangerouslySetInnerHTML={{ __html: props.bekreftelse.tekst}}/>
        </Bolk>
    );
};

export default Bekreftelse;
