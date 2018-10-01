soknad-html-generator
====================

En generell html generator basert på et definert søknadsobjekt.
Eksempel på objektet:

```
{
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
* Åpne `http://localhost:9000/` i nettleseren din

For å bygge en prodversjon kjør `yarn build`

# Bygging på egen maskin

`./build.sh` 

Se også `./build.sh --help` for alternativer 

---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes til <epost>

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #teamsoknad.