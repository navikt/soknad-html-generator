const express = require('express');
const path = require('path');
const fs = require('fs');

const delayMs = 1000;
const app = express();

function lesMockFil(filnavn) {
    return fs.readFileSync(path.join(__dirname, '/mock/' + filnavn), 'UTF-8');
}

app.get('/soknad-html-generator/api/oppsummering', function(req, res) {
    setTimeout(() => res.send(lesMockFil('oppsummering.json')), delayMs);
});

module.exports = app;
