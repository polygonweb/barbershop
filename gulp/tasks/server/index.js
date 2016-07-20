let browserSync = require('browser-sync');
let config = require('../../config');
let extend = require('../../utils/extend');

const bs = browserSync.create();

// browser-sync settings
var bsConfig = {
    server: {
        baseDir: config.paths.build.root,
        directory: true
    },
    files: config.paths.build.root + '**/*.*',
    host: 'localhost',
    port: 3000,
    notify: true,
    injectChanges: true,
    open: true,
    tunnel: false
};

module.exports = (gulp, plugins, config) => () => {
    return bs.init(extend(bsConfig, config.bsConfig || {}));
};
