/**
 * Watch task
 */
module.exports = (gulp, plugins, config) => () => {
    gulp.watch(`${config.paths.src.fonts}**/*.*`, gulp.parallel('fonts'));

    gulp.watch(`${config.paths.src.img}sprite/**/*.png`, gulp.parallel('sprite'));

    gulp.watch(`${config.paths.src.img}svg-sprite/**/*.svg`, gulp.parallel('svg-sprite'));

    gulp.watch([`${config.paths.src.img}**/*.*`, `!${config.paths.src.img}sprite/**/*.png`, `!${config.paths.src.img}svg-sprite/**/*.svg`], gulp.parallel('images'));

    gulp.watch(`${config.paths.src.styles}**/*.*`, gulp.parallel('styles'));

    gulp.watch(`${config.paths.watch.templates}`, gulp.parallel('templates'));
};
