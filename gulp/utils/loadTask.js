/**
 * Lazy loading gulp task
 */
let extend = require('extend');

module.exports = (gulp, plugins) => (taskName, config) => {
    let taskConfig = extend(Object.create(null), config);
    taskConfig.taskName = taskName;

    gulp.task(taskName, (cb) => {
        let taskFn = require(`../tasks/${taskName}`)(gulp, plugins, taskConfig);
        return taskFn(cb);
    });
};
