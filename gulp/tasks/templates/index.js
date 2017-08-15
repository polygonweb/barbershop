module.exports = (gulp, plugins, config) => () => {
	var { dataPath } = config;
	delete require.cache[require.resolve(dataPath)];
	var dataFile = require(dataPath);

	return plugins.combiner(
		gulp.src(config.src),
		plugins.pug(Object.assign(config.engineOptions, {
			locals: dataFile
		})),
		gulp.dest(config.dest)
	).on('error', config.onError);
}
