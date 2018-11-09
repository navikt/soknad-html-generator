import React from 'react';
import NavIkon from './ikoner/NavIkon';
import PropTypes from 'prop-types';

import GeneriskBolk from './GeneriskBolk';
import TilknytningTilUtland from './TilknytningTilUtland';
import ArbeidIUtlandet from './ArbeidIUtlandet';
import Bekreftelse from './Bekreftelse';
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
    const { bolker, metaData, soknad, tekster } = props;

    return (
        <div style={styles.wrapper}>
            <div style={styles.container} >
                <div style={styles.ikon}>
                    <NavIkon />
                </div>
                <h1 style={styles.tittel}>{metaData.tittel}</h1>
            </div>

            <SoknadsInfo person={metaData.person} innsendingsTidspunkt={metaData.innsendingsTidspunkt} />

            {
                bolker.map(bolk => {
                    if (bolk.elementer === null || bolk.elementer === 0) {
                        switch (bolk.bolknavn) {
                            case 'tilknytningTilUtland':
                                return <TilknytningTilUtland tilknytningTilUtland={soknad.tilknytningTilUtland} familieforhold={soknad.familieforhold} tekster={tekster} />
                            case 'arbeidIUtlandet':
                                return <ArbeidIUtlandet arbeidIUtlandet={soknad.arbeidIUtlandet} familieforhold={soknad.familieforhold} tekster={tekster} />
                            default:
                                throw(new Error('Ukjent bolk: ', bolk))
                        }
                    } else {
                        return <GeneriskBolk key={bolk.tittel} bolk={bolk} />
                    }
                })
            }

            <Bekreftelse bekreftelse={metaData.bekreftelse} />
        </div>
    );
};

SoknadPdf.propTypes = {
    oppsummering: {
    metaData: {
        tittel: PropTypes.string,
        skjemanummer: PropTypes.string,
        fastsattdato: MetaDataElement,
        innsendingsTidspunkt: MetaDataElement,
        person: {
            fnr: PropTypes.string,
        },
        bekreftelse: MetaDataElement
    },
  }
};

const MetaDataElement = {
    tekst: PropTypes.string,
    verdi: PropTypes.string,
};

export default SoknadPdf;