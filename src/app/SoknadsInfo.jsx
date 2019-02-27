import React from 'react';
import InnsendingTidspunkt from "./InnsendingTidspunkt";
import Personalia from "./Personalia";

const centering = {
    textAlign: 'center',
};

const SoknadsInfo = (props) => {
    const { innsendingsTidspunkt, person } = props;

    return (
        <div>
            <InnsendingTidspunkt innsendingsTidspunkt={innsendingsTidspunkt}/>
            <div style={centering}>
                {(person.fnr && person.navn && person.statsborgerskap) && <Personalia fnr={person.fnr} navn={person.navn} statsborgerskap={person.statsborgerskap} />}
            </div>
        </div>
    );
};

export default SoknadsInfo;
