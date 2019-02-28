import * as React from 'react';
import AdvarselIkon from './ikoner/AdvarselIkon';

interface IOppsummeringsElementProps {
    sporsmal: string;
    svar: string;
    advarsel: string;
}

const OppsummeringsElement: React.FunctionComponent<IOppsummeringsElementProps> = ({
    sporsmal,
    svar,
    advarsel,
}) => {
    return (
        <div className={'oppsummerings-element'}>
            {sporsmal && <h4 className={'oppsummerings-element__sporsmal'}>{sporsmal}</h4>}
            <p className={'oppsummerings-element__svar'}>{svar}</p>
            {advarsel && (
                <>
                    <AdvarselIkon className={'oppsummerings-element__advarsel-ikon'} />
                    <p className={'oppsummerings-element__advarsel'}>{advarsel}</p>
                </>
            )}
        </div>
    );
};

export default OppsummeringsElement;
