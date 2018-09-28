import React, { Component } from 'react';
import SoknadPdf from './SoknadPdf';

const styles = {
  html: {
    fontFamily: 'sans-serif', 
    fontSize: '10pt',
    lineHeight: '1.4em',
    margin: '0',
    color: '#3e3832',
    boxSizing: 'border-box',
  }
}

export default class App extends Component {
  render() {
    return (
      <html style={styles.html}>
            <head>
            <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
            </head>
            <body>
              <SoknadPdf soknad={this.props.oppsummering.soknad} tekster={this.props.oppsummering.tekster} />
            </body>
      </html>
    );
  }
}