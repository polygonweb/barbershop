/**
 * Styles
 */
var csso = require('postcss-csso');

const errorHandler = require('../../utils/errorHandler.js');


// настройки для обработчиков postcss
var processors = [
    require('postcss-import'),
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

const isMax = mq => /max-width/.test(mq);
const isMin = mq => /min-width/.test(mq);

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


module.exports = (gulp, plugins, config) => () => {
    return gulp
        .src(config.src)
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
        .pipe(plugins.if(!config.isProdMode, plugins.sourcemaps.init(), plugins.util.noop()))
        .pipe(plugins.postcss(processors))
        .pipe(plugins.if(!config.isProdMode, plugins.sourcemaps.write(), plugins.util.noop()))
        .pipe(plugins.if(!config.isProdMode, plugins.util.noop(), plugins.postcss([csso()])))
        .pipe(gulp.dest(config.dest))
};
