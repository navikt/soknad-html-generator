import React from 'react';

const Dato = {
    display: 'inline-block',
    width: '20%',

};
const DatoHeader = {
    marginBottom: '5px',
}
const tekst = {
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    margin: '0',
};


const InnsendingDato = (props) => {
    return (
      <div style={Dato}>
          <h4 style={DatoHeader}>{props.tekster['oppsummering.innsendingsdato']}</h4>
          <p style={tekst}>{props.dato}</p>
      </div>
    );
};

export default InnsendingDato;