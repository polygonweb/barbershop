/**
 * Copy and compress images
 */
module.exports = (gulp, plugins, config) => () => {
    let src = `${config.paths.src.img}**/*.*`;
    let dest = `${config.paths.build.img}`;

    return gulp
        .src(src, {
            since: gulp.lastRun(config.taskName)
        })
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
