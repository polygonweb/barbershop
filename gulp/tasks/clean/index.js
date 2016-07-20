/**
 * Clean task
 */
var del = require('del');

module.exports = (gulp, plugins, config) => () => {
    return del([config.paths.build.root])
        .then(function(paths) {
            plugins.util.log('Deleted:', plugins.util.colors.magenta(paths.join('\n')));
        });
};