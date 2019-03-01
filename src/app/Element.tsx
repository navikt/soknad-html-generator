import * as React from 'react';
import { AdvarselIkon } from './ikoner/AdvarselIkon';

interface IOppsummeringsElementProps {
    sporsmal: string;
    svar: string;
    advarsel: string;
}

const Element: React.FunctionComponent<IOppsummeringsElementProps> = ({
    sporsmal,
    svar,
    advarsel,
}) => {
    return (
        <div className={'element'}>
            {sporsmal && <h4 className={'element__sporsmal'}>{sporsmal}</h4>}
            <p className={'element__svar'}>{svar}</p>
            {advarsel && (
                <>
                    <AdvarselIkon className={'element__advarsel-ikon'} />
                    <p className={'element__advarsel'}>{advarsel}</p>
                </>
            )}
        </div>
    );
};

export { Element };
