let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('addons/default/zorca/pyrocms-theme/resources/js/main.js', 'public/app/default/assets/public/js/main.js')
   .sass('addons/default/zorca/pyrocms-theme/resources/scss/main.scss', 'public/app/default/assets/public/css/main.css');
