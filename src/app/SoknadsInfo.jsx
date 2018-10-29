import React from 'react';
import InnsendingTidspunkt from "./InnsendingTidspunkt";
import Personalia from "./Personalia";

const SoknadsInfo = (props) => {
    const { innsendingsTidspunkt, person } = props;

    return (
        <div>
            <InnsendingTidspunkt innsendingsTidspunkt={innsendingsTidspunkt}/>
            {person.fnr && <Personalia fnr={person.fnr}/>}
        </div>
    );
};

export default SoknadsInfo;