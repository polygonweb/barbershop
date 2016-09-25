/**
 * Clean task
 */
module.exports = (gulp, plugins, config) => () => {
	var del = require('del');
	return del([config.src])
		.then(function(paths) {
			plugins.util.log('Deleted:', plugins.util.colors.magenta(paths.join('\n')));
		});
};
