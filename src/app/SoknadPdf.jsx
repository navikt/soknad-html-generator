import React from 'react';
import NavIkon from './NavIkon';

import Personalia from './Personalia';
import SokerKrav from './SokerKrav';
import Barn from './Barn';
import Familieforhold from './Familieforhold';
import Barnehageplass from './Barnehageplass';
import ArbeidIUtlandet from './ArbeidIUtlandet';
import UtenlandskeYtelser from './UtenlandskeYtelser';
import UtenlandskKontantstotte from './UtenlandskKontantstotte';
import Oppsummering from './Oppsummering';

const styles = {
    wrapper:  {
    },    
    container:  {
        backgroundColor: '#c1b5d0',
        height: '60px',
    },
    tittel: {
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    ikon: {
        height: '32.25px',
        width: '50px',
        float: 'left',
        paddingTop: '13.875px',
        paddingLeft: '20px',
    }
}

const SoknadPdf = (props) => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.container} >
                <div style={styles.ikon}>
                    <NavIkon />
                </div>
                <h1 style={styles.tittel}>{props.tekster['kontantstotte.tittel']}</h1>
            </div>

            <Personalia person={props.soknad.person} tekster={props.tekster}/>
            <SokerKrav kravTilSoker={props.soknad.kravTilSoker} tekster={props.tekster}/>
            <Barn mineBarn={props.soknad.mineBarn} tekster={props.tekster}/>
            <Familieforhold familieforhold={props.soknad.familieforhold} tekster={props.tekster}/>
            <Barnehageplass barnehageplass={props.soknad.barnehageplass} tekster={props.tekster}/>
            <ArbeidIUtlandet arbeidIUtlandet={props.soknad.arbeidIUtlandet} familieforhold={props.soknad.familieforhold} tekster={props.tekster}/>
            <UtenlandskeYtelser familieforhold={props.soknad.familieforhold} utenlandskeYtelser={props.soknad.utenlandskeYtelser} tekster={props.tekster}/>
            <UtenlandskKontantstotte utenlandskKontantstotte={props.soknad.utenlandskKontantstotte} tekster={props.tekster}/>
            <Oppsummering tekster={props.tekster} />
        </div>
    );
};

export default SoknadPdf;