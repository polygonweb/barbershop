
module.exports = (gulp, plugins, config) => () => {
	const errorHandler = require('../../utils/errorHandler.js');

	return gulp
		.src(config.src)
		.pipe(plugins.plumber({
			errorHandler: plugins.notify.onError(function(err) {
				return {
					title: '<%= options.taskName %>',
					message: err.message,
					templateOptions: {
						taskName: config.taskName
					}
				};
			})
		}))
		.pipe(plugins.pug(config.engineOptions))
		.pipe(gulp.dest(config.dest))
}
