import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { IOppsummering } from '../types';
import SoknadPdf from './SoknadPdf';

const css = require('./index.less').toString();

const renderStaticHtml = (oppsummering: IOppsummering): string => {
    return renderToStaticMarkup(
        <html>
            <head>
                <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                <style type="text/css">{css}</style>
            </head>
            <body>
                <SoknadPdf oppsummering={oppsummering} />
            </body>
        </html>
    );
};

export { renderStaticHtml };
