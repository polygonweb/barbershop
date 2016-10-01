/**
 * Styles
 */
var csso = require('postcss-csso');


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
	return plugins.combiner([
		gulp.src(config.src),
		plugins.if(!config.isProdMode, plugins.sourcemaps.init(), plugins.util.noop()),
		plugins.stylus({
			paths:  ['node_modules'],
			'include css': true,
			sourcemap: false,
			compress: false
		}),
		plugins.postcss(processors),
		plugins.if(!config.isProdMode, plugins.sourcemaps.write(), plugins.util.noop()),
		plugins.if(!config.isProdMode, plugins.util.noop(), plugins.postcss([csso()])),
		gulp.dest(config.dest)
	]).on('error', plugins.notify.onError({
		title: '<%= options.taskName %>',
		message: '<%= error.message %>',
		templateOptions: {
			taskName: config.taskName
		}
	}));
};
