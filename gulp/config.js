/**
 * Path and Environment settings
 */
module.exports = {

    // flag for production build (set in gulpfile)
    production: false,

    paths: {
        build: {
            root: './build/',
            templates: './build/',
            styles: './build/css/',
            scripts: './build/js/',
            img: './build/img/',
            fonts: './build/fonts/'
        },
        src: {
            templates: './src/templates/pages/',
            scripts: './src/scripts/',
            styles: './src/styles/',
            stylesMain: './src/styles/main.*',
            img: './src/images/',
            fonts: './src/fonts/'
        },
        watch: {
            templates: './src/templates/**/*.*',
            scripts: './src/scripts/**/*.*',
            styles: './src/styles/**/*.*',
            img: './src/images/**/*.*',
            fonts: './src/fonts/**/*.*'
        }
    }
}
