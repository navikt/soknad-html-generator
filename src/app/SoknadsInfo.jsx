import React from 'react';
import InnsendingTidspunkt from "./InnsendingTidspunkt";
import Personalia from "./Personalia";

const SoknadsInfo = (props) => {
    const { fnr, innsendingsTidspunkt, tekster } = props;

    return (
        <div>
            <InnsendingTidspunkt tekster={tekster} innsendingsTidspunkt={innsendingsTidspunkt}/>
            {fnr && <Personalia fnr={fnr}/>}
        </div>
    );
};

export default SoknadsInfo;