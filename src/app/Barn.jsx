import React from 'react';
import Bolk from './Bolk';
import OppsummeringsElement from './OppsummeringsElement';

const Barn = (props) => {
        return (
            <Bolk tittel={props.tekster['barn.tittel']}>
                <h3>{props.tekster['oppsummering.barn.subtittel']}</h3>

                <OppsummeringsElement
                    sporsmal={props.tekster['barn.navn']}
                    svar={props.mineBarn.navn}
                />
                <OppsummeringsElement
                    sporsmal={props.tekster['barn.fodselsdato']}
                    svar={props.mineBarn.fodselsdato}
                />
            </Bolk>
        );
};

export default Barn;