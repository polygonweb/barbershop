
module.exports = (gulp, plugins, config) => () => {
	return plugins.combiner(
		gulp.src(config.src),
		plugins.pug(config.engineOptions),
		gulp.dest(config.dest)
	).on('error', config.onError);
}
