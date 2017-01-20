var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('css', function () {
    return gulp.src('dev/style/*.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss([ require('precss'), require('autoprefixer') ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('build/') );
});