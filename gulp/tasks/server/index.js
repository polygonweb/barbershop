
module.exports = (gulp, plugins, config) => () => {
	const browserSync = require('browser-sync');
	const bs = browserSync.create();
	return bs.init(Object.assign(Object.create(null), config.bsConfig || {}));
};
