let path = require('path');

module.exports = (gulp, plugins, config) => () => {
    var spriteData = gulp
        .src(`${config.paths.src.img}sprite/**/*.png`)
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
        .pipe(plugins.imagemin())
        .pipe(plugins.spritesmith({
            algorithm: 'binary-tree',
            imgName: 'icons.png',
            // retinaSrcFilter: '*@2x.png',
            // retinaImgName: 'icons@2x.png',
            cssName: 'sprite.css',
            cssTemplate: path.join(__dirname, 'sprite-template.hbs'),
            imgPath: `${config.paths.build.img}icons.png`,
            cssFormat: 'css',
            padding: 0
        }));

    spriteData
        .img
        .pipe(gulp.dest(config.paths.build.img));

    spriteData
        .css
        .pipe(gulp.dest(config.paths.src.styles));

    return spriteData;
};
