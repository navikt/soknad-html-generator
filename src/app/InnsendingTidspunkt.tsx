import * as React from 'react';
import { IMetadataFelt } from '../types';

interface IInnsendingTidspunktProps {
    innsendingsTidspunkt: IMetadataFelt;
}

const InnsendingTidspunkt: React.FunctionComponent<IInnsendingTidspunktProps> = ({
    innsendingsTidspunkt,
}) => {
    return (
        <div className={'innsending-tidspunkt'}>
            <h4 className={'innsending-tidspunkt__tidspunkt'}>
                {innsendingsTidspunkt.tekst}
                <span className={'innsending-tidspunkt__tidspunkt-verdi'}>
                    {innsendingsTidspunkt.verdi}
                </span>
            </h4>
        </div>
    );
};

export default InnsendingTidspunkt;
