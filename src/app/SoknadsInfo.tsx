import * as React from 'react';
import { IMetadataFelt, IPerson } from '../types';
import InnsendingTidspunkt from './InnsendingTidspunkt';
import Personalia from './Personalia';

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
            <div className={'centering'}>
                {person.fnr && person.navn && <Personalia fnr={person.fnr} navn={person.navn} />}
            </div>
        </div>
    );
};

export default SoknadsInfo;
