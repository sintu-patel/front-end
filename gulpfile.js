var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');

// compiles sass files and makes .css file
gulp.task('compileReactSASS', function() {
	gulp.src('reactjs/sass/app.scss')
		.pipe(compass({
			css: 'reactjs/assets/css/',
			sass: 'reactjs/sass/'
		}))
		.pipe(gulp.dest('reactjs/assets/css/'));
});

gulp.task('watch', function() {
	gulp.watch(['reactjs/**/*'], ['compileReactSASS']);
});

gulp.task('default', ['compileReactSASS']);
