import * as React from 'react';
import { IOppsummering } from '../types';
import { Bekreftelse } from './Bekreftelse';
import { Bolk } from './Bolk';
import { Header } from './Header';
import { SoknadsInfo } from './SoknadsInfo';

interface ISoknadPdfProps {
    oppsummering: IOppsummering;
}

const SoknadPdf: React.FunctionComponent<ISoknadPdfProps> = ({ oppsummering }) => {
    const { bolker, metaData } = oppsummering;

    return (
        <div>
            <div className={'left-footer'}>
                {metaData.skjemanummer + ' e-' + metaData.tittel.toLowerCase()}
            </div>
            <div className={'right-footer'}>
                {metaData.fastsattdato &&
                    metaData.fastsattdato.tekst + ' ' + metaData.fastsattdato.verdi + ' '}
                {metaData.endretDato && metaData.endretDato.tekst + ' ' + metaData.endretDato.verdi}
            </div>
            <Header tittel={metaData.tittel} />

            <SoknadsInfo
                person={metaData.person}
                innsendingsTidspunkt={metaData.innsendingsTidspunkt}
            />

            {bolker.map(bolk => {
                if (bolk.elementer !== null || bolk.elementer !== 0) {
                    return <Bolk key={bolk.tittel} bolk={bolk} />;
                }
            })}

            <Bekreftelse bekreftelse={metaData.bekreftelse} />
        </div>
    );
};

export { SoknadPdf };
