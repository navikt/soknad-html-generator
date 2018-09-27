import React, { Component } from 'react';
import SoknadPdf from './SoknadPdf';

export default class App extends Component {
  render() {
    return (
      <html>
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