import bodyParser from 'body-parser';
import { renderStaticHtml } from './app';
import express from 'express';

const server = express();
const port = process.env.PORT || 9000;

server.use(bodyParser.json());

server.post('/api/generateHtml', (req, res) => {
    const oppsummering = req.body;
    const ferdigRendretHtml = renderStaticHtml(oppsummering);

    res.set('Content-Type', 'text/html');
    res.send(new Buffer(ferdigRendretHtml));
});

if (process.env.NODE_ENV === 'development') {
    const mocks = {
        ekstrem: require('../mocks/oppsummering_ekstrem.json'),
        enkel: require('../mocks/oppsummering_enkel.json'),
        komplett: require('../mocks/oppsummering_komplett')
    };

    server.get('/test/getHtml/:type', (req, res) => {
        try {
            const oppsummering = mocks[req.params.type];
            const ferdigRendretHtml = renderStaticHtml(oppsummering);

            res.set('Content-Type', 'text/html');
            res.send(new Buffer(ferdigRendretHtml));
        } catch (err) {
            next(err);
        }
    });
}

server.get('/api/ping', (req, res) => {
    res.send('OK');
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server started on port ${port}`);
});