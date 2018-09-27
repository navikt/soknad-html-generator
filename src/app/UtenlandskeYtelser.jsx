import React from 'react';
import Bolk from './Bolk';
import OppsummeringsElement from './OppsummeringsElement';

const UtenlandskeYtelser = (props) => {
    return (
        <Bolk tittel={props.tekster['utenlandskeYtelser.tittel']}>
            <div>
                <OppsummeringsElement
                    sporsmal={props.tekster['utenlandskeYtelser.mottarYtelserFraUtland.sporsmal']}
                    svar={props.utenlandskeYtelser.mottarYtelserFraUtland}
                />
                {props.utenlandskeYtelser.mottarYtelserFraUtlandForklaring !== '' &&
                    <OppsummeringsElement
                        sporsmal={props.tekster['oppsummering.utenlandskeYtelser.forklaring.label']}
                        svar={props.utenlandskeYtelser.mottarYtelserFraUtlandForklaring}
                    />
                }
            </div>

            {props.familieforhold.borForeldreneSammenMedBarnet === 'JA' &&
                <div>
                    <OppsummeringsElement
                        sporsmal={props.tekster['oppsummering.utenlandskeYtelser.mottarAnnenForelderYtelserFraUtland']}
                        svar={props.utenlandskeYtelser.mottarAnnenForelderYtelserFraUtland}
                    />

                    {props.utenlandskeYtelser.mottarAnnenForelderYtelserFraUtlandForklaring !== '' &&
                        <OppsummeringsElement
                            sporsmal={props.tekster['oppsummering.utenlandskeYtelser.forklaring.label']}
                            svar={props.utenlandskeYtelser.mottarAnnenForelderYtelserFraUtlandForklaring}
                        />
                    }
                </div>
            }
        </Bolk>
    );
};

export default UtenlandskeYtelser;