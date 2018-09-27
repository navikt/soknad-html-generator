import React from 'react';
import Bolk from './Bolk';
import OppsummeringsElement from './OppsummeringsElement';

const ArbeidIUtlandet = (props) => {
    return (
        <Bolk tittel={props.tekster['arbeidIUtlandet.tittel']}>
            <div>
                <OppsummeringsElement
                    sporsmal={props.tekster['arbeidIUtlandet.arbeiderIUtlandetEllerKontinentalsokkel.sporsmal']}
                    svar={props.arbeidIUtlandet.arbeiderIUtlandetEllerKontinentalsokkel}
                />
                {props.arbeidIUtlandet.arbeiderIUtlandetEllerKontinentalsokkelForklaring !== '' &&
                    <OppsummeringsElement
                        sporsmal={props.tekster['arbeidIUtlandet.forklaring.hjelpetekst']}
                        svar={props.arbeidIUtlandet.arbeiderIUtlandetEllerKontinentalsokkelForklaring}
                    />
                }
            </div>

            {props.familieforhold.borForeldreneSammenMedBarnet === 'JA' &&
                <div>
                    <OppsummeringsElement
                        sporsmal={props.tekster['arbeidIUtlandet.arbeiderAnnenForelderIUtlandet.sporsmal']}
                        svar={props.arbeidIUtlandet.arbeiderAnnenForelderIUtlandet}
                    />

                    {props.arbeidIUtlandet.arbeiderAnnenForelderIUtlandetForklaring !== '' &&
                        <OppsummeringsElement
                            sporsmal={props.tekster['arbeidIUtlandet.forklaring.hjelpetekst']}
                            svar={props.arbeidIUtlandet.arbeiderAnnenForelderIUtlandetForklaring}
                        />
                    }
                </div>
            }
        </Bolk>
    );
};

export default ArbeidIUtlandet;