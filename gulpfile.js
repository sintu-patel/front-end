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

gulp.task('compileRawSASS', function() {
	gulp.src('raw/sass/app.scss')
		.pipe(compass({
			css: 'raw/assets/css/',
			sass: 'raw/sass/'
		}))
		.pipe(gulp.dest('raw/assets/css/'));
});

gulp.task('compileAngularSASS', function() {
	gulp.src('angularjs/sass/app.scss')
		.pipe(compass({
			css: 'angularjs/assets/css/',
			sass: 'angularjs/sass/'
		}))
		.pipe(gulp.dest('angularjs/assets/css/'));
});

gulp.task('watch', function() {
	gulp.watch(['reactjs/**/*', 'raw/**/*', 'angularjs/**/*'], ['compileReactSASS', 'compileRawSASS', 'compileAngularSASS']);
});

gulp.task('default', ['compileReactSASS', 'compileRawSASS', 'compileAngularSASS']);
