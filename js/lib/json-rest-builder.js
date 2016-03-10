"use strict";
class JsonRestBuilder {
    constructor(init) {
        this.proto = {};
        this.url = '';
        this.prefix = '';
        this.request = null;
        Object.assign(this, init);
    }
    _build(method, name, path, args) {
        let funcName = prefixName(this.prefix, name);
        let getOptions = (data) => {
            let options = {
                url: this.url + parsePath(path, data),
                method: method,
            };
            if (method === 'POST') {
                let postData = {};
                if (args && data && typeof data === 'object') {
                    for (let p of args)
                        if (p in data)
                            postData[p] = data[p];
                }
                postData = JSON.stringify(postData);
                options.postData = postData;
                options.headers = {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Content-Length': Buffer.byteLength(postData, 'UTF-8')
                };
            }
            return options;
        };
        this.proto[funcName] = (data) => {
            return this.request(getOptions(data));
        };
        return this;
    }
    get(name, path) {
        return this._build('GET', name, path);
    }
    delete(name, path) {
        return this._build('DELETE', name, path);
    }
    post(name, path, args) {
        return this._build('POST', name, path, args);
    }
    create(obj) {
        Object.assign(obj, this.proto);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JsonRestBuilder;
function parsePath(path, data) {
    return path.replace(/:([a-zA-Z0-9_$]+)/g, (m, p) => {
        if (!(p in data))
            throw new TypeError('invalid arguments');
        return data[p];
    });
}
function prefixName(prefix, name) {
    return prefix ? prefix + name.charAt(0).toUpperCase() + name.slice(1) : name;
}
