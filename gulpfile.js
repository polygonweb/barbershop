/**
 * Require babel-core for es6-style task definition
 */
require('babel-core/register');

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const dirList = require('./gulp/utils/dirList.js');

const loadTask = require('./gulp/utils/loadTask')(gulp, plugins);
let config = require('./gulp/config');
config.production = (!!plugins.util.env['prod']) ? true : false;

let taskList = dirList('gulp/tasks');

taskList.forEach((task) => {
    loadTask(task, config);
});


gulp.task(
    'build',
    gulp.series(
        'clean',
        gulp.parallel(
            'fonts',
            'images',
            'templates',
            'scripts',
            gulp.series('sprite', 'svg-sprite', 'styles')
        )
    )
);

gulp.task(
    'dev',
    gulp.series(
        'build',
        gulp.parallel('watch', 'server')
    )
);

gulp.task(
    'default',
    gulp.series(
        'dev'
    )
);
