/**
 * Lazy loading gulp task
 */
let path = require('path');

module.exports = (gulp, plugins) => (taskName, taskPath, config, description) => {
    let taskConfig = Object.assign(Object.create(null), config, { taskName: taskName });

    let gulpFunc = callback => {
        let taskFn = require(path.resolve(taskPath))(gulp, plugins, taskConfig);
        return taskFn(callback);
    };

    if (description) gulpFunc.description = description;

    gulp.task(taskName, gulpFunc);
};
