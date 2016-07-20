/**
 * SVG Sprite
 */
const errorHandler = require('../../utils/errorHandler.js');

// config for svg-sprite utility
let svgSpriteConfig = {
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
};

module.exports = (gulp, plugins, config) => () => {
    return gulp.src(`${config.paths.src.img}svg-sprite/**/*.svg`)
        .pipe(plugins.svgSprite(svgSpriteConfig))
        .on('error', errorHandler)
        .pipe(gulp.dest(`${config.paths.build.img}`));
};
