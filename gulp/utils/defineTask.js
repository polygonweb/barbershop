/**
 * Lazy loading gulp task
 */
let path = require('path');

module.exports = (gulp, plugins) => (taskName, taskPath, config, description) => {

	let taskConfig = Object.assign(Object.create(null), config, { taskName: taskName });

	if (config.onError && typeof config.onError === 'function') {
		taskConfig.onError = config.onError;
	} else {
		// gulp-notify сам завершает поток - this.end() или this.emit('end') не нужны
		taskConfig.onError = plugins.notify.onError({
			title: 'Gulp: <%= options.taskName %>',
			message: '<%= error.message %>',
			templateOptions: {
				taskName: taskName
			}
		});
	};

	let gulpFunc = callback => {
		let taskFn = require(path.resolve(taskPath))(gulp, plugins, taskConfig);
		return taskFn(callback);
	};

	if (description) gulpFunc.description = description;

	gulp.task(taskName, gulpFunc);
};
