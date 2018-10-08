import React from 'react';
import OppsummeringsElement from './OppsummeringsElement';

const styles = {
    topBorder: {
        borderTop: '1px solid black',
        padding: '10px 0',
        pageBreakInside: 'avoid',
    },
    bolkContainer: {
        padding: '0 0.5cm',
    },
    uppercase: {
        textTransform: 'uppercase',
    },
    undertittel: {
        fontStyle: 'italic',
        margin: '0 0 .25cm 0',
    },
    elementer(innrykk) {
        return {
            paddingLeft: (innrykk * 0.5) + 'cm'
        }
    }
}

const FORSTE_INNRYKK = 0;

const renderElementer = (elementer, innrykk) => {
    return (
        elementer.map(element => {
            return (
                <div style={styles.elementer(innrykk)}>
                    <OppsummeringsElement
                        sporsmal={element.sporsmal}
                        svar={element.svar}
                        advarsel={element.advarsel}
                    />
                    {(element.underelementer && element.underelementer.length > 0) && renderElementer(element.underelementer, innrykk + 1)}
                </div>
            )
        })
    )
}

const Bolk = (props) => {
    const bolk = props.bolk;
    return (
        <div style={styles.topBorder}>
            <div style={styles.bolkContainer}>
                {bolk.tittel && <h3 style={styles.uppercase}>{bolk.tittel}</h3>}
                {bolk.undertittel && <h4 style={styles.undertittel}>{bolk.undertittel}</h4>}
                {
                    renderElementer(bolk.elementer, FORSTE_INNRYKK)
                }
            </div>
        </div>
    );
};

export default Bolk;