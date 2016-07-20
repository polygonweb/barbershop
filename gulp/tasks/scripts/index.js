/**
 * Scripts
 */
module.exports = (gulp, plugins, config) => () => {
    return gulp.src(`${config.paths.src.scripts}main.js`)
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError({
                title: '<%= options.taskName %>',
                message: '<%= error.message %>',
                templateOptions: {
                    taskName: config.taskName
                }
            })
        }))
        .pipe(plugins.include({
            includePaths: [
                'node_modules/',
                `${config.paths.src.scripts}`
            ]
        }))
        .pipe(plugins.if(config.production, plugins.uglify(), plugins.util.noop()))
        .pipe(gulp.dest(`${config.paths.build.scripts}`));
};
