import * as bodyParser from 'body-parser';
import * as Express from 'express';
import { renderStaticHtml } from './app';
import { IOppsummering } from './types';

const server = Express();
const port = 9000;

server.use(bodyParser.json());

server.post('/api/generateHtml', (req, res) => {
    const oppsummering = req.body;
    const ferdigRendretHtml = renderStaticHtml(oppsummering);

    res.set('Content-Type', 'text/html');
    res.send(new Buffer(ferdigRendretHtml));
});

interface IMocks {
    [key: string]: IOppsummering;
}

if (process.env.NODE_ENV === 'development') {
    const mocks: IMocks = {
        ekstrem: require('../mocks/oppsummering_ekstrem.json'),
        enkel: require('../mocks/oppsummering_enkel.json'),
        komplett: require('../mocks/oppsummering_komplett.json'),
        komplett_vedlegg: require('../mocks/oppsummering_komplett_vedlegg.json'),
    };

    server.get('/test/getHtml/:type', (req: Express.Request, res, next) => {
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
    /* tslint:disable:no-console */
    console.log(`Server started on port ${port}`);
});
