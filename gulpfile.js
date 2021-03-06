const path = require('path');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
plugins.combiner = function() {
	let combiner = require('stream-combiner2').obj;
	return combiner.apply(null, arguments);
};

const defineTask = require('./gulp/utils/defineTask')(gulp, plugins);

let config = require('./gulp/config');
config.production = (!!plugins.util.env['prod']) ? true : false;


/**
 * Объявления задач
 */

// удаление папки сборки
defineTask('clean', './gulp/tasks/clean', {
	src: config.paths.build.root
}, 'Удаление директории сборки');


// копирование шрифтов
defineTask('fonts', './gulp/tasks/fonts', {
	src: `${config.paths.src.fonts}**/*.*`,
	dest: `${config.paths.build.fonts}`
}, 'Обработка шрифтов');


// обработка растровых изображений
defineTask('images', './gulp/tasks/images', {
	src: `${config.paths.src.img}**/*.*`,
	dest: `${config.paths.build.img}`
}, 'Обработка изображений');


// обработка favicon
defineTask('favicon', './gulp/tasks/favicon', {
	src: `${config.paths.src.favicon}`,
	dest: `${config.paths.build.favicon}`
}, 'Обработка favicon');


// обработка html-страниц
defineTask('templates', './gulp/tasks/templates', {
	src: [config.paths.src.templates  + 'pages/*.pug'],
	dest: config.paths.build.templates,
	dataPath: path.resolve(config.paths.src.templates + '/data'),
	engineOptions: {
		locals: {}
	}
}, 'Обработка html-представлений');


// сборка скриптов
defineTask('scripts', './gulp/tasks/scripts', {
	isProdMode: config.production,
	src: `${config.paths.src.scripts}main.js`,
	dest: `${config.paths.build.scripts}`,
	options: {
		includePaths: [
			'node_modules/',
			`${config.paths.src.scripts}`
		]
	}
}, 'Обработка скриптов');


// запуск сервера
defineTask('server', './gulp/tasks/server', {
	bsConfig: {
		server: {
			baseDir: config.paths.build.root,
			directory: true
		},
		files: config.paths.build.root + '**/*.*',
		host: 'localhost',
		port: 8000,
		notify: true,
		injectChanges: true,
		open: false,
		tunnel: false
	}
}, 'Запуск сервера');


// спрайт для растровых картинок
defineTask('sprite', './gulp/tasks/sprite', {
	isProdMode: config.production,
	src: `${config.paths.src.img}sprite/**/*.png`,
	stylesDest: config.paths.src.styles,
	imgDest: config.paths.build.img,
	spriteOptions: {
		algorithm: 'binary-tree',
		padding: 0,
		algorithmOpts: {
			sort: false
		},
		imgName: 'icons.png',
		imgPath: `${config.paths.build.img}icons.png`,
		// retinaSrcFilter: '*@2x.png',
		// retinaImgName: 'icons@2x.png',
		cssTemplate: './gulp/tasks/sprite/sprite-template.stylus.hbs',
		// cssName: 'sprite.css',
		// cssFormat: 'css',
		cssName: 'sprite.styl',
		cssFormat: 'stylus',
	}
}, 'Спрайт для растровых картинок');


// спрайт для SVG-иконок
defineTask('svg-sprite', './gulp/tasks/svg-sprite', {
	src: `${config.paths.src.img}svg-sprite/**/*.svg`,
	dest: `${config.paths.build.img}`,
	svgSpriteConfig: {
		"mode": {
			"symbol": {
				dest: '',
				sprite: 'icons.svg',
				bust: false
			}
		},
		"transform": [{
			"svgo": {
				"plugins": [
					{
						"cleanupAttrs": false
					},
					{
						"removeTitle": false
					},
					{
						"cleanupIDs": false
					},
					{
						"mergePaths": false
					}
				]
			}
		}],
		"svg": {
			"xmlDeclaration": false,
			"doctypeDeclaration": false
		}
	}
}, 'Спрайт для SVG-иконок');


// стили
defineTask('styles', './gulp/tasks/stylus', {
	isProdMode: config.production,
	src: config.paths.src.stylesMain,
	dest: config.paths.build.styles,
}, 'Обработка стилей');


// создание zip-архива
defineTask('zip', './gulp/tasks/zip', {
	// fileName: 'build.zip',
	src: config.paths.build.root + '**/*.*',
	dest: '.'
}, 'Создание zip-архива');


/**
 * Cоставные задачи
 */
gulp.task(
	'build',
	gulp.series(
		'clean',
		gulp.parallel(
			'fonts',
			'favicon',
			'images',
			'templates',
			'scripts',
			gulp.series('sprite', 'svg-sprite', 'styles')
		)
	)
);

gulp.task('watch', function(done) {
	gulp.watch(`${config.paths.src.fonts}**/*.*`, gulp.parallel('fonts'));
	gulp.watch(`${config.paths.src.img}sprite/**/*.png`, gulp.parallel('sprite'));
	gulp.watch(`${config.paths.src.img}svg-sprite/**/*.svg`, gulp.parallel('svg-sprite'));
	gulp.watch([`${config.paths.src.img}**/*.*`, `!${config.paths.src.img}sprite/**/*.png`, `!${config.paths.src.img}svg-sprite/**/*.svg`], gulp.parallel('images'));
	gulp.watch(`${config.paths.src.styles}**/*.*`, gulp.parallel('styles'));
	gulp.watch(`${config.paths.watch.scripts}`, gulp.parallel('scripts'));
	gulp.watch(`${config.paths.watch.templates}`, gulp.parallel('templates'));
	gulp.watch(`${config.paths.watch.favicon}`, gulp.parallel('favicon'));
	done();
});

gulp.task(
	'dev',
	gulp.series(
		'build',
		gulp.parallel('watch', 'server')
	)
);

gulp.task('default', gulp.series('dev'));
