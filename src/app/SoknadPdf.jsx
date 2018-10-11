import React from 'react';
import NavIkon from './ikoner/NavIkon';

import SokerKrav from './SokerKrav';
import GeneriskBolk from './GeneriskBolk';
import TilknytningTilUtland from './TilknytningTilUtland';
import ArbeidIUtlandet from './ArbeidIUtlandet';
import UtenlandskKontantstotte from './UtenlandskKontantstotte';
import Oppsummering from './Oppsummering';
import SoknadsInfo from "./SoknadsInfo";

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
        marginRight: '70px',
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
    const { bolker, fnr, innsendingsTidspunkt, soknad, tekster } = props;

    return (
        <div style={styles.wrapper}>
            <div style={styles.container} >
                <div style={styles.ikon}>
                    <NavIkon />
                </div>
                <h1 style={styles.tittel}>{tekster['kontantstotte.tittel']}</h1>
            </div>

            <SoknadsInfo tekster={tekster} innsendingsTidspunkt={innsendingsTidspunkt} fnr={fnr}/>

            {
                bolker.map(bolk => {
                    if (bolk.elementer === null || bolk.elementer === 0) {
                        switch (bolk.bolknavn) {
                            case 'kravTilSoker':
                                return <SokerKrav kravTilSoker={soknad.kravTilSoker} tekster={tekster} />
                            case 'tilknytningTilUtland':
                                return <TilknytningTilUtland tilknytningTilUtland={soknad.tilknytningTilUtland} familieforhold={soknad.familieforhold} tekster={tekster} />
                            case 'arbeidIUtlandet':
                                return <ArbeidIUtlandet arbeidIUtlandet={soknad.arbeidIUtlandet} familieforhold={soknad.familieforhold} tekster={tekster} />
                            case 'utenlandskKontantstotte':
                                return <UtenlandskKontantstotte utenlandskKontantstotte={soknad.utenlandskKontantstotte} tekster={tekster} />
                            case 'oppsummering':
                                return <Oppsummering tekster={tekster} />
                            default:
                                throw(new Error('Ukjent bolk: ', bolk))
                        }
                    } else {
                        return <GeneriskBolk bolk={bolk} />
                    }
                })
            }
        </div>
    );
};

export default SoknadPdf;