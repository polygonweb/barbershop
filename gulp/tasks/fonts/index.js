/**
 * Fonts
 */
module.exports = (gulp, plugins, config) => () => {
    let src = config.src;
    let dest = config.dest;

    return gulp
        .src(src, { since: gulp.lastRun(config.taskName) })
        .pipe(plugins.newer(dest))
        .pipe(gulp.dest(dest));
};
