import React, { Component } from 'react';
import SoknadPdf from './SoknadPdf';

const styles = {
  body: {
    fontFamily: 'Source Sans Pro, sans-serif', 
    fontSize: '10pt',
    lineHeight: '1.4em',
    margin: '0',
    color: '#3e3832',
    boxSizing: 'border-box',
  }
};

export default class App extends Component {
  render() {
    const oppsummering = this.props.oppsummering;
    return (
            <body style={styles.body}>
              <SoknadPdf
                soknad={oppsummering.soknad}
                metaData={oppsummering.metaData}
                tekster={oppsummering.tekster}
                bolker={oppsummering.bolker} />
            </body>
    );
  }
}