import * as React from 'react';

interface IPeronaliaProps {
    navn: string;
    fnr: string;
}

const Personalia: React.FunctionComponent<IPeronaliaProps> = ({ navn, fnr }) => {
    return (
        <div className={'personalia'}>
            <h2>{navn}</h2>
            {fnr}
        </div>
    );
};

export default Personalia;
