import React from 'react';
import InnsendingTidspunkt from "./InnsendingTidspunkt";
import Personalia from "./Personalia";

const centering = {
    textAlign: 'center',
};

const SoknadsInfo = (props) => {
    const { innsendingsTidspunkt, person } = props;

    return (
        <div style={centering}>
            <InnsendingTidspunkt innsendingsTidspunkt={innsendingsTidspunkt}/>
            {(person.fnr && person.navn) && <Personalia fnr={person.fnr} navn={person.navn}/>}
        </div>
    );
};

export default SoknadsInfo;
