var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var newer = require('gulp-newer');
var sourcemaps = require('gulp-sourcemaps');

var jsFiles = {
  vendor: [

  ],
  source: [
    'app.jsx',
    'components/component.jsx'
  ]
};

// only if the copy in node_modules is "newer"
gulp.task('copy-react', function() {
  return gulp.src('node_modules/react/dist/react.js')
    .pipe(newer('assets/js/src/vendor/react.js'))
    .pipe(gulp.dest('assets/js/src/vendor'));
});
gulp.task('copy-react-dom', function() {
  return gulp.src('node_modules/react-dom/dist/react-dom.js')
    .pipe(newer('assets/js/src/vendor/react-dom.js'))
    .pipe(gulp.dest('assets/js/src/vendor'));
});

// Copy assets/js/vendor/* to assets/js
gulp.task('copy-js-vendor', function() {
  return gulp
    .src([
      'assets/js/src/vendor/react.js',
      'assets/js/src/vendor/react-dom.js'
    ])
    .pipe(gulp.dest('assets/js'));
});

gulp.task('concat', ['copy-react', 'copy-react-dom'], function() {
  return gulp.src(jsFiles.vendor.concat(jsFiles.source))
    .pipe(sourcemaps.init())
    .pipe(babel({
      only: [
        'components',
      ],
      compact: false
    }))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/'));
});
