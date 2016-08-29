var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');

gulp.task('compileAppSASS', function() {
	gulp.src('raw/sass/app.scss')
		.pipe(compass({
			css: 'assets/css/',
			sass: 'raw/sass/'
		}))
		.pipe(gulp.dest('assets/css/'));
});


gulp.task('watch', function() {
	gulp.watch(['raw/**/*'], ['compileAppSASS']);
});

gulp.task('default', ['compileAppSASS']);
