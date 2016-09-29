/**
 * Fonts
 */
module.exports = (gulp, plugins, config) => () => {
	return plugins.combiner(
		gulp.src(config.src, { since: gulp.lastRun(config.taskName) }),
		plugins.newer(config.dest),
		gulp.dest(config.dest)
	).on('error', plugins.notify.onError({
		title: '<%= options.taskName %>',
		message: '<%= error.message %>',
		templateOptions: {
			taskName: config.taskName
		}
	}));
};
