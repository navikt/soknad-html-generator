import React from 'react';
import Bolk from './Bolk';
import OppsummeringsElement from './OppsummeringsElement';

const Familieforhold = (props) => {
    return (
        <Bolk tittel={props.tekster['familieforhold.tittel']}>
            <OppsummeringsElement
                sporsmal={props.tekster['familieforhold.borForeldreneSammenMedBarnet.sporsmal']}
                svar={props.familieforhold.borForeldreneSammenMedBarnet}
            />

            {props.familieforhold.borForeldreneSammenMedBarnet === 'JA' &&
                <>
                    <OppsummeringsElement
                        sporsmal={props.tekster['oppsummering.familieforhold.annenForelderNavn.label']}
                        svar={props.familieforhold.annenForelderNavn}
                    />
                    <OppsummeringsElement
                    sporsmal={props.tekster['oppsummering.familieforhold.annenForelderFodselsnummer.label']}
                    svar={props.familieforhold.annenForelderFodselsnummer}
                    />
                </>
            }
        </Bolk>
    );
};

export default Familieforhold;