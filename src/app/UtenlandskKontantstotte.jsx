import React from 'react';
import Bolk from './Bolk';
import OppsummeringsElement from './OppsummeringsElement';

const UtenlandskKontantstotte = (props) => {
        return (
            <Bolk tittel={props.tekster['utenlandskKontantstotte.tittel']}>            
                <OppsummeringsElement
                    sporsmal={props.tekster['utenlandskKontantstotte.mottarKontantstotteFraUtlandet.sporsmal']}
                    svar={props.utenlandskKontantstotte.mottarKontantstotteFraUtlandet}
                />
                {props.utenlandskKontantstotte.mottarKontantstotteFraUtlandet === 'JA' &&
                        <OppsummeringsElement
                            sporsmal={props.tekster['utenlandskKontantstotte.mottarKontantstotteFraUtlandet.tilleggsinfo.sporsmal']}
                            svar={props.utenlandskKontantstotte.mottarKontantstotteFraUtlandetTilleggsinfo}
                        />
                }
            </Bolk>
        );
};

export default UtenlandskKontantstotte;