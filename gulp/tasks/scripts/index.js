/**
 * Scripts
 */
module.exports = (gulp, plugins, config) => () => {
    return plugins.combiner(
        gulp.src(config.src),
        plugins.include(config.options),
        plugins.if(config.isProdMode, plugins.uglify(), plugins.util.noop()),
        gulp.dest(config.dest)
    ).on('error', plugins.notify.onError({
        title: '<%= options.taskName %>',
        message: '<%= error.message %>',
        templateOptions: {
            taskName: config.taskName
        }
    }));
};
