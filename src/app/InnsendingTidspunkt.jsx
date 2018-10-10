import React from 'react';

const styles = {
    Dato: {
        display: 'inline-block',
        width: '20%',

    },
    DatoHeader: {
        marginBottom: '5px',
    },
    tekst: {
        whiteSpace: 'pre-wrap',
        margin: '0',
    }
};

const InnsendingTidspunkt = (props) => {
    return (
      <div style={styles.Dato}>
          <h4 style={styles.DatoHeader}>{props.tekster['oppsummering.innsendingsdato']}</h4>
          <p style={styles.tekst}>{props.innsendingsTidspunkt}</p>
      </div>
    );
};

export default InnsendingTidspunkt;