import React from 'react';
import NavIkon from './NavIkon';

import Personalia from './Personalia';
import SokerKrav from './SokerKrav';
import Barn from './Barn';
import Barnehageplass from './Barnehageplass';
import Familieforhold from './Familieforhold';
import GeneriskBolk from './GeneriskBolk';
import TilknytningTilUtland from './TilknytningTilUtland';
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
    const { bolker, soknad, tekster } = props;

    return (
        <div style={styles.wrapper}>
            <div style={styles.container} >
                <div style={styles.ikon}>
                    <NavIkon />
                </div>
                <h1 style={styles.tittel}>{tekster['kontantstotte.tittel']}</h1>
            </div>

            {
                bolker.map(bolk => {
                    if (bolk.elementer === null || bolk.elementer === 0) {
                        switch (bolk.bolknavn) {
                            case 'personalia':
                                return <Personalia person={soknad.person} tekster={tekster}/>
                            case 'kravTilSoker':
                                return <SokerKrav kravTilSoker={soknad.kravTilSoker} tekster={tekster} />
                            case 'mineBarn':
                                return <Barn mineBarn={soknad.mineBarn} tekster={tekster} />
                            case 'barnehageplass':
                                return <Barnehageplass barnehageplass={soknad.barnehageplass} tekster={tekster} />
                            case 'familieforhold':
                                return <Familieforhold familieforhold={soknad.familieforhold} tekster={tekster} />
                            case 'tilknytningTilUtland':
                                return <TilknytningTilUtland tilknytningTilUtland={soknad.tilknytningTilUtland} familieforhold={soknad.familieforhold} tekster={tekster} />
                            case 'arbeidIUtlandet':
                                return <ArbeidIUtlandet arbeidIUtlandet={soknad.arbeidIUtlandet} familieforhold={soknad.familieforhold} tekster={tekster} />
                            case 'utenlandskeYtelser':
                                return <UtenlandskeYtelser utenlandskeYtelser={soknad.utenlandskeYtelser} familieforhold={soknad.familieforhold} tekster={tekster} />
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