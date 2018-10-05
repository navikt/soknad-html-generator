import React from 'react';
import AdvarselIkon from './ikoner/AdvarselIkon';

const styles = {
    container: {
        marginBottom: '.25cm',
    },
    sporsmal: {
        margin: '.1cm 0',
    },
    svar: {
        whiteSpace: 'pre-wrap',
        margin: '.1cm 0'
    },
    advarselIkon: {
        float: 'left',
        marginRight: '.25cm',
    }
};

const OppsummeringsElement = (props) => {
    return (
      <div style={styles.container}>
          { props.sporsmal &&
            <h4 style={styles.sporsmal}>{props.sporsmal}</h4>
          }
          <p style={styles.svar}>{props.svar}</p>
          { props.advarsel &&
            <>
                <AdvarselIkon style={styles.advarselIkon} />
                <p style={styles.svar}>{props.advarsel}</p>
            </>
          }
      </div>
    );
};

export default OppsummeringsElement;