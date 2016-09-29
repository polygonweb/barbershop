/**
 * SVG Sprite
 */

module.exports = (gulp, plugins, config) => () => {
	return plugins.combiner(
		gulp.src(config.src),
		plugins.svgSprite(config.svgSpriteConfig),
		gulp.dest(config.dest)
	).on('error', plugins.notify.onError({
		title: '<%= options.taskName %>',
		message: '<%= error.message %>',
		templateOptions: {
			taskName: config.taskName
		}
	}));
};
