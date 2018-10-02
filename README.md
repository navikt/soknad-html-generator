soknad-html-generator
====================

En generell html generator basert på et definert søknadsobjekt.<br/>Eksempel på objektet:

```
soknad: {
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
    underelementer: [elementer]
}
```

# Kom i gang med utvikling

* Installere avhengigheter `yarn`
* Starte dev-server `yarn start`
* Kall `http://localhost:9000/api/generateHtml` med ønsket søknadsobjekt

For å bygge en prodversjon kjør `yarn build`

# Bygging på egen maskin

`./build.sh` 

Se også `./build.sh --help` for alternativer 

---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes til <epost>

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #teamsoknad.
