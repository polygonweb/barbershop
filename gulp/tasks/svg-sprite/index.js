/**
 * SVG Sprite
 */

module.exports = (gulp, plugins, config) => () => {
	return plugins.combiner(
		gulp.src(config.src),
		plugins.svgSprite(config.svgSpriteConfig),
		gulp.dest(config.dest)
	).on('error', config.onError);
};
