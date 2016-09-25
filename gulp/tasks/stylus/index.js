/**
 * Styles
 */
var csso = require('postcss-csso');

const errorHandler = require('../../utils/errorHandler.js');


// настройки для обработчиков postcss
var processors = [
    require('postcss-custom-properties'),
    require('postcss-custom-media'),
    require('postcss-nesting'),
    require('autoprefixer')({
        browsers: ['>1%', 'last 4 version', 'ie 10', 'ie 11']
    }),
    require('css-mqpacker')({
        sort: sortMediaQueries
    })
];

function sortMediaQueries(a, b) {
    let A = a.replace(/\D/g, '');
    let B = b.replace(/\D/g, '');

    if (isMax(a) && isMax(b)) {
        return B - A;
    } else if (isMin(a) && isMin(b)) {
        return A - B;
    } else if (isMax(a) && isMin(b)) {
        return 1;
    } else if (isMin(a) && isMax(b)) {
        return -1;
    }

    return 1;
};

function isMax(mq) {
    return /max-width/.test(mq);
}

function isMin(mq) {
    return /min-width/.test(mq);
}


module.exports = (gulp, plugins, config) => () => {
    return gulp
        .src(config.src)
        .pipe(plugins.if(!config.isProdMode, plugins.sourcemaps.init(), plugins.util.noop()))
        .pipe(plugins.plumber({
            errorHandler: plugins.notify.onError({
                title: '<%= options.taskName %>',
                message: '<%= error.message %>',
                templateOptions: {
                    taskName: config.taskName
                }
            })
        }))
        .pipe(plugins.stylus({
            paths:  ['node_modules'],
            'include css': true,
            sourcemap: false,
            compress: false
        }))
        .pipe(plugins.postcss(processors))
        .pipe(plugins.if(!config.isProdMode, plugins.sourcemaps.write(), plugins.util.noop()))
        .pipe(plugins.if(!config.isProdMode, plugins.util.noop(), plugins.postcss([csso()])))
        .pipe(gulp.dest(config.paths.build.styles))
};
