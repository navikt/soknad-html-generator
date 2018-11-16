import bodyParser from 'body-parser';
import { renderStaticHtml } from './app';

const api = '/api';
const express = require('express');
const server = express();
const port = process.env.PORT || 9000;

server.use(bodyParser.json());

server.post(api + '/generateHtml', (req, res) => {
    const oppsummering = req.body;
    const ferdigRendretHtml = renderStaticHtml(oppsummering);

    res.set('Content-Type', 'text/html');
    res.send(new Buffer(ferdigRendretHtml));
});

if (process.env.NODE_ENV === 'development') {
    server.get('/test/getHtml/:type', (req, res) => {
        try {
            const oppsummering = require(`./mock/oppsummering_${req.params.type}.json`)
            const ferdigRendretHtml = renderStaticHtml(oppsummering);

            res.set('Content-Type', 'text/html');
            res.send(new Buffer(ferdigRendretHtml));
        } catch (err) {
            next(err);
        }
    });
}

server.get(api + '/ping', (req, res) => {
    res.send('OK');
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server started on port ${port}`);
});