/**
 * Copy and compress images
 */
module.exports = (gulp, plugins, config) => () => {
    let src = config.src;
    let dest = config.dest;

    return gulp
        .src(src, { since: gulp.lastRun(config.taskName) })
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError({
                title: '<%= options.taskName %>',
                message: '<%= error.message %>',
                templateOptions: {
                    taskName: config.taskName
                }
            })
        }))
        .pipe(plugins.newer(dest))
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(dest));
};
