/**
 * Path and Environment settings
 */
module.exports = {

    // flag for production build (set in gulpfile)
    // production: process.env.NODE_ENV === 'production',
    production: process.env.NODE_ENV === 'production',

    paths: {
        build: {
            root: './build/',
            templates: './build/',
            styles: './build/css/',
            scripts: './build/js/',
            img: './build/img/',
            fonts: './build/fonts/',
            favicon: './build/img/favicon/'
        },
        src: {
            templates: './src/templates/',
            scripts: './src/scripts/',
            styles: './src/styles/',
            stylesMain: './src/styles/main.*',
            img: './src/images/',
            fonts: './src/fonts/',
            favicon: './src/images/favicon/**/*.*'
        },
        watch: {
            templates: './src/templates/**/*.*',
            scripts: './src/scripts/**/*.*',
            styles: './src/styles/**/*.*',
            img: './src/images/**/*.*',
            fonts: './src/fonts/**/*.*',
            favicon: './src/images/favicon/**/*.*'
        }
    }
}
