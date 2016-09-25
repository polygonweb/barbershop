/**
 * Scripts
 */
module.exports = (gulp, plugins, config) => () => {
    return gulp.src(config.src)
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError({
                title: '<%= options.taskName %>',
                message: '<%= error.message %>',
                templateOptions: {
                    taskName: config.taskName
                }
            })
        }))
        .pipe(plugins.include(config.options))
        .pipe(plugins.if(config.isProdMode, plugins.uglify(), plugins.util.noop()))
        .pipe(gulp.dest(config.dest));
};
