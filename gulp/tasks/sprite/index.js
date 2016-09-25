
module.exports = (gulp, plugins, config) => () => {

	var spriteData = gulp
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
		.pipe(plugins.imagemin())
		.pipe(plugins.spritesmith(config.spriteOptions));

	spriteData
		.img
		.pipe(gulp.dest(config.imgDest));

	spriteData
		.css
		.pipe(gulp.dest(config.stylesDest));

	return spriteData;
};
