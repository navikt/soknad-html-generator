interface ISoknad {
    innsendingsTidspunkt: string;
    person: {
        fnr: string;
        navn: string;
    };
    arbeidIUtlandet: {
        arbeiderAnnenForelderIUtlandet: string;
        arbeiderAnnenForelderIUtlandetForklaring: string;
        arbeiderIUtlandetEllerKontinentalsokkel: string;
        arbeiderIUtlandetEllerKontinentalsokkelForklaring: string;
    };
    barnehageplass: {
        barnBarnehageplassStatus: string;
        harBarnehageplass: string;
        harBarnehageplassAntallTimer: string;
        harBarnehageplassDato: string;
        harBarnehageplassKommune: string;
        harSluttetIBarnehageAntallTimer: string;
        harSluttetIBarnehageDato: string;
        harSluttetIBarnehageKommune: string;
        skalBegynneIBarnehageAntallTimer: string;
        skalBegynneIBarnehageDato: string;
        skalBegynneIBarnehageKommune: string;
        skalSlutteIBarnehageAntallTimer: string;
        skalSlutteIBarnehageDato: string;
        skalSlutteIBarnehageKommune: string;
    };
    familieforhold: {
        annenForelderFodselsnummer: string;
        annenForelderNavn: string;
        borForeldreneSammenMedBarnet: string;
    };
    kravTilSoker: {
        barnIkkeHjemme: string;
        boddEllerJobbetINorgeSisteFemAar: string;
        borSammenMedBarnet: string;
        ikkeAvtaltDeltBosted: string;
        norskStatsborger: string;
        skalBoMedBarnetINorgeNesteTolvMaaneder: string;
    };
    veiledning: {
        bekreftelse: string;
    };
    mineBarn: {
        fodselsdato: string;
        navn: string;
        erFlerling: string;
    };
    oppsummering: {
        bekreftelse: string;
    };
    tilknytningTilUtland: {
        annenForelderBoddEllerJobbetINorgeMinstFemAar: string;
        annenForelderBoddEllerJobbetINorgeMinstFemAarForklaring: string;
        boddEllerJobbetINorgeMinstFemAar: string;
        boddEllerJobbetINorgeMinstFemAarForklaring: string;
    };
    utenlandskKontantstotte: {
        mottarKontantstotteFraUtlandet: string;
        mottarKontantstotteFraUtlandetTilleggsinfo: string;
    };
    utenlandskeYtelser: {
        mottarAnnenForelderYtelserFraUtland: string;
        mottarAnnenForelderYtelserFraUtlandForklaring: string;
        mottarYtelserFraUtland: string;
        mottarYtelserFraUtlandForklaring: string;
    };
    sprak: string;
}

interface IMetadataFelt {
    tekst: string;
    verdi: string;
}

interface IPerson {
    fnr: string;
    navn: string;
    statsborgerskap: string;
}

interface IMetadata {
    tittel: string;
    skjemanummer: string;
    fastsattdato: IMetadataFelt;
    endretDato: IMetadataFelt;
    innsendingsTidspunkt: IMetadataFelt;
    person: IPerson;
    bekreftelse: IMetadataFelt;
}

interface IElement {
    sporsmal: string;
    svar: string | string[];
    advarsel: string;
    underelementer: IElement[];
}

interface IBolk {
    bolknavn: string;
    tittel: string;
    undertittel: string;
    elementer: IElement[];
}

interface ITekster {
    [key: string]: string;
}

interface IOppsummering {
    soknad: ISoknad;
    metaData: IMetadata;
    bolker: IBolk[];
    tekster: ITekster;
}

export { IMetadataFelt, IBolk, IOppsummering, IElement, IPerson };
