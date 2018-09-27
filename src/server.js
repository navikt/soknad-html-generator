import bodyParser from 'body-parser';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './app/App';


const api = '/api';
const express = require('express');
const server = express();
const port = process.env.PORT || 9000;

server.use(bodyParser.json())

server.post(api + '/generateHtml', (req, res) => {
    const oppsummering = req.body;
    const appString = renderToStaticMarkup(<App oppsummering={oppsummering}/>);

    res.set('Content-Type', 'text/html');
    res.send(new Buffer(appString));
});

server.get(api + '/ping', (req, res) => {
    res.send('OK')
})

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});