import * as React from 'react';
import { IMetadataFelt, IOppsummering } from '../types';

interface IBekreftelseProps {
    bekreftelse: IMetadataFelt;
}

const Bekreftelse: React.FunctionComponent<IBekreftelseProps> = props => {
    return (
        <div className={'topBorder'}>
            <h4 dangerouslySetInnerHTML={{ __html: props.bekreftelse.tekst }} />
        </div>
    );
};

export default Bekreftelse;
