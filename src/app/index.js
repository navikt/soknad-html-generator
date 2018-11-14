import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

const renderStaticHtml = (oppsummering) => {
    return `
         <html>
            <head>
                <meta httpEquiv="content-type" content="text/html; charset=utf-8"/>
                <style type="text/css">
                    @page {
                        size: A4 portrait;
                        margin: 1cm;
                    }
                    .left-footer {
                        font-size: 12px;
                        line-height: 1.25rem;
                        font-weight: 400;
                        display: inline-block;
                        position: running(left-footer);
                        margin-top: -.5cm;
                    }
                    
                    .right-footer {
                        font-size: 12px;
                        line-height: 1.25rem;
                        font-weight: 400;
                        display: block;
                        position: running(right-footer);
                        margin-top: -.5cm;
                        text-align: right;
                    }
                    @page {
                        @bottom-left {
                            content: element(left-footer);
                        }
                        @bottom-right {
                            content: element(right-footer);
                        }
                    }
                </style>
            </head>
            ${renderToStaticMarkup(<App oppsummering={oppsummering} />, 'utf-8')}
        </html>`;
};

export {
    renderStaticHtml
}