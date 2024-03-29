const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'https://localhost:3443'];

var corsOptionsDelegate = (req, callback) => {
    var corsOption;

    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOption = { origin: true };
    }
    else {
        corsOption = { origin: false};
    }

    callback(null, corsOption);
}

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);