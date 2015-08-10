var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
  return browserify('./src/scripts.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/'));
});
