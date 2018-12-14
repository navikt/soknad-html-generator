soknad-html-generator
====================

En generell html generator basert på et definert søknadsobjekt.<br/>Eksempel på objektet:

```
{
    fnr: 'xxxxxxxxxxx',
    innsendingsTidspunkt: 'innsendingsTidspunkt',
    bolker:
        [ { bolknavn: 'bolknavn',
            tittel: 'tittel',
            undertittel: 'undertittel',
            elementer: [elementer] } ],
}
```

Et element er bygget opp slik:
```
element: {
    sporsmal: 'sporsmal',
    svar: 'svar',
    advarsel: 'advarsel',
    underelementer: [ elementer ]
}
```

# Kom i gang med utvikling

* Installere avhengigheter `yarn`
* Starte dev-server `yarn start:dev`
* Kall `http://localhost:9000/api/generateHtml` med ønsket søknadsobjekt

For å bygge en prodversjon kjør `yarn build:prod`

## Testing i nettleser
I nettleser kan søknader generert fra mock-søknadsobjekter åpnes i `http://localhost:9000/test/getHtml/[søknadstype]`, hvor søknadstype `enkel`, `ekstrem` eller `komplett` er definert i mock-søknadsobjektets filnavn. 

# Kjøring av visuelle regresjons tester

* Installere avhengigheter `yarn`
* Bygg dev-server `yarn build:dev`
* Bygg docker `yarn docker:build`
* Kjør vrt `yarn test:ci`
* Ved oppdatering av vrt, kjør `yarn test:ci-capture`

# Bygging på egen maskin

`./build.sh` 

Se også `./build.sh --help` for alternativer 

---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes til <epost>

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #teamsoknad.
