let mix = require('laravel-mix').mix;

mix.js('src/assets/js/app.js', 'public/assets/js')
   .sass('src/assets/sass/styles.sass', 'public/assets/css');