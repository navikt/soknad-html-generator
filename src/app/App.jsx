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
}

export default class App extends Component {
  render() {
    console.log(this.props)
    return (
      <html>
            <head>
            <meta httpEquiv="content-type" content="text/html; charset=utf-8"/>
            </head>
            <body style={styles.body}>
              <SoknadPdf soknad={this.props.oppsummering.soknad} fnr={this.props.oppsummering.fnr} tekster={this.props.oppsummering.tekster} bolker={this.props.oppsummering.bolker} />
            </body>
      </html>
    );
  }
}