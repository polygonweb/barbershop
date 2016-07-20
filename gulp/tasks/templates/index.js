
const errorHandler = require('../../utils/errorHandler.js');

module.exports = (gulp, plugins, config) => () => {
	return gulp
		.src([config.paths.src.templates  + '*.pug'])
		.pipe(plugins.plumber({
            errorHandler: plugins.notify.onError(function(err) {
                return {
                    title: '<%= options.taskName %>',
                    message: err.message,
                    templateOptions: {
                        taskName: config.taskName
                    }
                };
            })
        }))
		.pipe(plugins.pug({
			locals: {}
		}))
		.pipe(gulp.dest(config.paths.build.templates))
};
