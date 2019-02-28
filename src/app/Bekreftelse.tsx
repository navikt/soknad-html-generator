import * as React from 'react';
import { IMetadataFelt } from '../types';

interface IBekreftelseProps {
    bekreftelse: IMetadataFelt;
}

const Bekreftelse: React.FunctionComponent<IBekreftelseProps> = props => {
    return (
        <div className={'bekreftelse'}>
            <h4 dangerouslySetInnerHTML={{ __html: props.bekreftelse.tekst }} />
        </div>
    );
};

export default Bekreftelse;
