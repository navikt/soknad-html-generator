import React from 'react';

const styles = {
    container: {
        padding: '5px 0',
    },
    sporsmal: {
        margin: '5px 0',
    },
    svar: {
        whiteSpace: 'pre-wrap',
        margin: '5px 0'
    }
};

const OppsummeringsElement = (props) => {
    return (
      <div style={styles.container}>
          { props.sporsmal &&
            <h4 style={styles.sporsmal}>{props.sporsmal}</h4>
          }
          <p style={styles.svar}>{props.svar}</p>
      </div>
    );
};

export default OppsummeringsElement;