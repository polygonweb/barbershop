/**
 * Fonts
 */
module.exports = (gulp, plugins, config) => () => {
    let src = `${config.paths.src.fonts}**/*.*`;
    let dest = `${config.paths.build.fonts}`;

    return gulp
        .src(src, {
            since: gulp.lastRun(config.taskName)
        })
        .pipe(plugins.newer(dest))
        .pipe(gulp.dest(dest));
};
