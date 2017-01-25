var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

// Plugins
var precss = require('precss');
var autoprefixer = require('autoprefixer');

gulp.task('runPostCss', function () {
	return gulp.src('dev/style/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss([precss, autoprefixer]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('build/'));
});

gulp.task('default', ['runPostCss']);