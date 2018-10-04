import bodyParser from 'body-parser';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './app/App';
import fs from 'fs';

const api = '/api';
const express = require('express');
const server = express();
const port = process.env.PORT || 9000;
const mock_path = './src/mock/'
const SKRIV_OPPSUMMERING_TIL_MOCK_JSON = false;

server.use(bodyParser.json())

server.post(api + '/generateHtml', (req, res) => {
    const oppsummering = req.body;
    const appString = renderToStaticMarkup(<App oppsummering={oppsummering}/>);

    if (process.env.NODE_ENV === 'development') {
        if (SKRIV_OPPSUMMERING_TIL_MOCK_JSON) {
            fs.writeFile(mock_path + "oppsummering.json", JSON.stringify(oppsummering, null, 4), 'utf8', function (err) {
                if(err) {
                    return console.log(err);
                }
            
                console.log(`Søknad json ble lagret til '${mock_path}'`);
            }); 
        }
    }
    
    res.set('Content-Type', 'text/html');
    res.send(new Buffer(appString));
});

server.get(api + '/generateHtml', (req, res) => {
    try {
        const oppsummering = require('./mock/oppsummering.json')
        const appString = renderToStaticMarkup(<App oppsummering={oppsummering}/>, "utf-8");

        res.set('Content-Type', 'text/html');
        res.send(new Buffer(appString));
    } catch (err) {
        next(err);
    }
});


server.get(api + '/ping', (req, res) => {
    res.send('OK');
})

server.listen(port, '0.0.0.0', () => {
    console.log(`Server started on port ${port}`);
});