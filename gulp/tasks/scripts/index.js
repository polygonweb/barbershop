/**
 * Scripts
 */
module.exports = (gulp, plugins, config) => () => {
	return plugins.combiner(
		gulp.src(config.src),
		plugins.if(!config.isProdMode, plugins.sourcemaps.init(), plugins.util.noop()),
		plugins.include(config.options),
		plugins.if(!config.isProdMode, plugins.sourcemaps.write(), plugins.util.noop()),
		plugins.if(config.isProdMode, plugins.uglify(), plugins.util.noop()),
		gulp.dest(config.dest)
	).on('error', config.onError);
};
