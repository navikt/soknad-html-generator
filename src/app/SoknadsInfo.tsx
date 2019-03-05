import * as React from 'react';
import { IMetadataFelt, IPerson } from '../types';
import { InnsendingTidspunkt } from './InnsendingTidspunkt';
import { Personalia } from './Personalia';

interface ISoknadsInfoProps {
    innsendingsTidspunkt: IMetadataFelt;
    person: IPerson;
}

const SoknadsInfo: React.FunctionComponent<ISoknadsInfoProps> = ({
    innsendingsTidspunkt,
    person,
}) => {
    return (
        <div>
            <InnsendingTidspunkt innsendingsTidspunkt={innsendingsTidspunkt} />
            <div className={'soknads-info__personalia'}>
                {person.fnr && person.navn && <Personalia fnr={person.fnr} navn={person.navn} />}
            </div>
        </div>
    );
};

export { SoknadsInfo };