/**
 * Template for task
 */
module.exports = (gulp, plugins, config) => () => {
    return gulp.src(`${config.paths.src}`)
        .pipe(gulp.dest(`${config.paths.dist}`));
};