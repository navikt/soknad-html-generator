import * as React from 'react';
import { IBolk, IElement } from '../types';
import OppsummeringsElement from './OppsummeringsElement';

function calcInnrykk(innrykk: number) {
    return {
        paddingLeft: innrykk * 0.5 + 'cm',
    };
}

const FORSTE_INNRYKK = 0;

const renderElementer = (elementer: IElement[], innrykk: number) => {
    return elementer.map(element => {
        return (
            <div style={calcInnrykk(innrykk)}>
                <OppsummeringsElement
                    sporsmal={element.sporsmal}
                    svar={element.svar}
                    advarsel={element.advarsel}
                />
                {element.underelementer &&
                    element.underelementer.length > 0 &&
                    renderElementer(element.underelementer, innrykk + 1)}
            </div>
        );
    });
};

interface IBolkProps {
    bolk: IBolk;
}

const Bolk: React.FunctionComponent<IBolkProps> = ({ bolk }) => {
    return (
        <div className={'bolk'}>
            <div className={'bolk__container'}>
                {bolk.tittel && <h3 className={'bolk__tittel'}>{bolk.tittel}</h3>}
                {bolk.undertittel && <h4 className={'bolk__undertittel'}>{bolk.undertittel}</h4>}
                {renderElementer(bolk.elementer, FORSTE_INNRYKK)}
            </div>
        </div>
    );
};

export { Bolk };
