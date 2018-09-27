const api = '/api';

import { renderToString } from 'react-dom/server';
import App from '../app/App';

export default function (server) {
    console.log(server)
    server.get(api + '/generateHtml', (req, res) => {
        console.log(req);
        const appString = renderToString(App);
        res.send(appString);
    });
}