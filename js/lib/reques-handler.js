"use strict";
const url_1 = require('url');
const http_1 = require('http');
let requestHandler = function (options) {
    return new Promise((resolve, reject) => {
        Object.assign(options, url_1.parse(options.url));
        let headers = {
            'Connection': 'keep-alive',
            'Accept': 'application/json',
            'User-Agent': 'autoclick'
        };
        if (options.headers)
            Object.assign(options.headers, headers);
        else
            options.headers = headers;
        let req = http_1.request(options, res => {
            let data = '';
            res.setEncoding('utf8');
            res.on('data', chunk => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode != 200) {
                    data = {
                        status: res.statusCode,
                        value: { message: data }
                    };
                    return reject(data);
                }
                data = JSON.parse(data);
                if (data.status)
                    return reject(data);
                resolve(data);
            });
        });
        req.on('error', reject);
        if (options.method == 'POST' && options.postData !== {}) {
            req.write(options.postData);
        }
        req.end();
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = requestHandler;
