"use strict";
const _1 = require('../');
const wd = new _1.default({ url: 'http://localhost:9515' });
wd.getStatus().then(console.log);
wd.initSession({
    desiredCapabilities: {
        browserName: 'chrome'
    } })
    .then(res => {
    console.log(res);
    return wd.openUrl({ sessionId: res.sessionId, url: 'http://google.com' });
})
    .catch(console.log);
