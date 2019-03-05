import * as React from 'react';

interface IPeronaliaProps {
    navn: string;
    fnr: string;
    statsborgerskap: string;
}

const Personalia: React.FunctionComponent<IPeronaliaProps> = ({ navn, fnr, statsborgerskap }) => {
    return (
        <div className={'personalia'}>
            <h2>{navn}</h2>
            {fnr + ' // ' + statsborgerskap}
        </div>
    );
};

export { Personalia };
