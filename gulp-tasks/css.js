var gulp = require('gulp');
var concat = require('gulp-concat-css');
var minify = require('gulp-minify-css');

// Concat styles and move to public dir
gulp.task('css', function() {
  return gulp.src('src/*.css'])
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('public/'));
});
