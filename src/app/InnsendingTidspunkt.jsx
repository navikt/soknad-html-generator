import React from 'react';

const styles = {
    dato: {
        float: 'left',
    },
    tekst: {
        fontWeight: 'normal',
        paddingLeft: '.5em',
    }
};

const InnsendingTidspunkt = (props) => {
    return (
      <div style={styles.dato}>
          <h4>{props.tekster['oppsummering.innsendingsdato']}
            <span style={styles.tekst}>{props.innsendingsTidspunkt}</span>
          </h4>
      </div>
    );
};

export default InnsendingTidspunkt;