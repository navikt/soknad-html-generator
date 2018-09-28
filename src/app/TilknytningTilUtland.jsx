import React from 'react';
import Bolk from './Bolk';
import OppsummeringsElement from './OppsummeringsElement';

const hentTekstNokkelForSvar = (svar) => {
    return 'oppsummering.tilknytningTilUtland.svar.' + svar;
};

const TilknytningTilUtland = (props) => {
    return (
        <Bolk tittel={props.tekster['tilknytningTilUtland.tittel']}>
            <div>
                <OppsummeringsElement
                    sporsmal={props.tekster['oppsummering.tilknytningTilUtland.boddEllerJobbetINorgeMinstFemAar']}
                    svar={props.tekster[
                        hentTekstNokkelForSvar(props.tilknytningTilUtland.boddEllerJobbetINorgeMinstFemAar)
                        ]}
                />
                {props.tilknytningTilUtland.boddEllerJobbetINorgeMinstFemAarForklaring !== '' &&
                    <OppsummeringsElement
                        sporsmal={props.tekster['oppsummering.tilknytningTilUtland.forklaring']}
                        svar={props.tilknytningTilUtland.boddEllerJobbetINorgeMinstFemAarForklaring}
                    />
                }
            </div>

            {props.familieforhold.borForeldreneSammenMedBarnet === 'JA' &&
                <div>
                    <OppsummeringsElement
                        sporsmal={props.tekster[
                            'oppsummering.tilknytningTilUtland.annenForelderBoddEllerJobbetINorgeMinstFemAar'
                            ]}
                        svar={props.tekster[
                            hentTekstNokkelForSvar(
                                props.tilknytningTilUtland.annenForelderBoddEllerJobbetINorgeMinstFemAar
                            )]}
                    />
                    {props.tilknytningTilUtland.annenForelderBoddEllerJobbetINorgeMinstFemAarForklaring !== '' &&
                    <OppsummeringsElement
                        sporsmal={props.tekster['oppsummering.tilknytningTilUtland.forklaring']}
                        svar={props.tilknytningTilUtland.annenForelderBoddEllerJobbetINorgeMinstFemAarForklaring}
                    />
                    }
                </div>
            }
        </Bolk>
    );
};

export default TilknytningTilUtland;