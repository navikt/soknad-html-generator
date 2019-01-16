import React from 'react';

const styles = {
    innsendingContainer: {
        width: '20%',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        left: '0',
        textAlign: 'left',
        paddingLeft: '20px',
    },
    tidspunkt: {
        marginBottom: '0',
    },
    tidspunktVerdi: {
        fontWeight: 'normal',
        paddingLeft: '.5em',
    },
};

const InnsendingTidspunkt = (props) => {
    return (
      <div style={styles.innsendingContainer}>
          <h4 style={styles.tidspunkt}>{props.innsendingsTidspunkt.tekst}
            <span style={styles.tidspunktVerdi}>{props.innsendingsTidspunkt.verdi}</span>
          </h4>
      </div>
    );
};

export default InnsendingTidspunkt;
