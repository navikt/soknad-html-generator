import React from 'react';
import InnsendingTidspunkt from "./InnsendingTidspunkt";
import Personalia from "./Personalia";

const styles = {
    undertittel: {
        padding: '.5cm',
    }
};

const SoknadsInfo = (props) => {
    const { fnr, innsendingsTidspunkt, tekster } = props;

    return (
        <div style={styles.undertittel}>
            <InnsendingTidspunkt tekster={tekster} innsendingsTidspunkt={innsendingsTidspunkt}/>
            {fnr && <Personalia fnr={fnr}/>}
        </div>
    );
};

export default SoknadsInfo;