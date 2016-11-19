"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const _1 = require("../");
const wd = new _1.default({ url: 'http://localhost:9515' });
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(yield wd.getStatus());
            let res = yield wd.initSession({
                desiredCapabilities: {
                    browserName: 'chrome'
                }
            });
            console.log(res);
            yield wd.openUrl({ sessionId: res.sessionId, url: 'http://google.com' });
        }
        catch (err) {
            console.log(err);
        }
    });
}
