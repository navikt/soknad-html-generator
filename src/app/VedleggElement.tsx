import * as React from 'react';
import { AdvarselIkon } from './ikoner/AdvarselIkon';
import { BindersIkon } from './ikoner/BindersIkon';
import { randomKey } from './util';

interface IVedleggElementProps {
    sporsmal: string;
    svar: string[];
    advarsel: string;
}

const VedleggElement: React.FunctionComponent<IVedleggElementProps> = ({
    advarsel,
    sporsmal,
    svar,
}) => {
    return (
        <div className={'vedlegg-element'}>
            {sporsmal && <h4 className={'vedlegg-element__sporsmal'}>{sporsmal}</h4>}
            <ul className={'vedlegg-element__vedlegg-liste'}>
                {svar.map(s => {
                    return (
                        <li className={'vedlegg-element__vedlegg'} key={randomKey()}>
                            <BindersIkon className={'vedlegg-element__binders-ikon'} />
                            <p className={'vedlegg-element__svar'}>{s}</p>
                        </li>
                    );
                })}
            </ul>
            {advarsel && (
                <>
                    <AdvarselIkon className={'vedlegg-element__advarsel-ikon'} />
                    <p className={'vedlegg-element__advarsel'}>{advarsel}</p>
                </>
            )}
        </div>
    );
};

export { VedleggElement };
