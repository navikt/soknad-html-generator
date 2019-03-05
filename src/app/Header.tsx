import * as React from 'react';
import { NavIkon } from './ikoner/NavIkon';

interface IHeaderProps {
    tittel: string;
}

const Header: React.FunctionComponent<IHeaderProps> = ({ tittel }) => {
    return (
        <div className={'header__container'}>
            <div className={'header__nav-ikon'}>
                <NavIkon />
            </div>
            <h1 className={'header__tittel'}>{tittel}</h1>
        </div>
    );
};

export { Header };
