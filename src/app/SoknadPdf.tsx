import * as React from 'react';
import { IOppsummering } from '../types';
import NavIkon from './ikoner/NavIkon';

import GeneriskBolk from './GeneriskBolk';
import Bekreftelse from './Bekreftelse';
import SoknadsInfo from './SoknadsInfo';

interface ISoknadPdfProps {
    oppsummering: IOppsummering;
}

const SoknadPdf: React.FunctionComponent<ISoknadPdfProps> = ({ oppsummering }) => {
    const { bolker, metaData } = oppsummering;

    return (
        <div className={'wrapper'}>
            <div className={'left-footer'}>
                {metaData.skjemanummer + ' e-' + metaData.tittel.toLowerCase()}
            </div>
            <div className={'right-footer'}>
                {metaData.fastsattdato &&
                    metaData.fastsattdato.tekst + ' ' + metaData.fastsattdato.verdi + ' '}
                {metaData.endretDato && metaData.endretDato.tekst + ' ' + metaData.endretDato.verdi}
            </div>
            <div className={'container'}>
                <div className={'ikon'}>
                    <NavIkon />
                </div>
                <h1 className={'tittel'}>{metaData.tittel}</h1>
            </div>

            <SoknadsInfo
                person={metaData.person}
                innsendingsTidspunkt={metaData.innsendingsTidspunkt}
            />

            {bolker.map(bolk => {
                if (bolk.elementer !== null || bolk.elementer !== 0) {
                    return <GeneriskBolk key={bolk.tittel} bolk={bolk} />;
                }
            })}

            <Bekreftelse bekreftelse={metaData.bekreftelse} />
        </div>
    );
};

export default SoknadPdf;
