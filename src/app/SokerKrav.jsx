import React from 'react';
import Bolk from './Bolk';
import OppsummeringsElement from './OppsummeringsElement';

const SokerKrav = props => {
    return (
        <Bolk tittel={props.tekster['sokerkrav.tittel']}>
            <OppsummeringsElement svar={props.tekster['oppsummering.kravtilsoker.norskStatsborger']}/>
            <OppsummeringsElement svar={props.tekster['oppsummering.kravtilsoker.boddEllerJobbetINorgeSisteFemAar']}/>
            <OppsummeringsElement svar={props.tekster['oppsummering.kravtilsoker.borSammenMedBarnet']}/>
            <OppsummeringsElement svar={props.tekster['oppsummering.kravtilsoker.barnIkkeHjemme']}/>
            <OppsummeringsElement svar={props.tekster['oppsummering.kravtilsoker.ikkeAvtaltDeltBosted']}/>
            <OppsummeringsElement
                svar={props.tekster['oppsummering.kravtilsoker.skalBoMedBarnetINorgeNesteTolvMaaneder']}/>
        </Bolk>
    )
};

export default SokerKrav;