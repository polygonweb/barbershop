/**
 * SVG Sprite
 */

module.exports = (gulp, plugins, config) => () => {
    const errorHandler = require('../../utils/errorHandler.js');
    return gulp.src(config.src)
        .pipe(plugins.svgSprite(config.svgSpriteConfig))
        .on('error', errorHandler)
        .pipe(gulp.dest(config.dest));
};
