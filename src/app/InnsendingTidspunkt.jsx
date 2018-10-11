import React from 'react';

const styles = {
    dato: {
        display: 'inline-block',
        width: '20%',

    },
    datolabel: {
        marginBottom: '5px',
    },
    tekst: {
        whiteSpace: 'pre-wrap',
        margin: '0',
    }
};

const InnsendingTidspunkt = (props) => {
    return (
      <div style={styles.dato}>
          <h4 style={styles.datolabel}>{props.tekster['oppsummering.innsendingsdato']}</h4>
          <p style={styles.tekst}>{props.innsendingsTidspunkt}</p>
      </div>
    );
};

export default InnsendingTidspunkt;