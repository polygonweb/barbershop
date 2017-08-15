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
	console.log(config.isProdMode);
	config.isProdMode && processors.push(csso({
		restructure: false,
		comments: false
	}));
	return plugins.combiner(
		gulp.src(config.src),
		plugins.if(!config.isProdMode, plugins.sourcemaps.init(), plugins.util.noop()),
		plugins.postcss(processors),
		plugins.if(!config.isProdMode, plugins.sourcemaps.write(), plugins.util.noop()),
		// plugins.if(!config.isProdMode, plugins.util.noop(), plugins.postcss([csso()])),
		gulp.dest(config.dest)
	).on('error', config.onError);
};
