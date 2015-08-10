var gulp = require('gulp');
var run = require('gulp-run');
var concat = require('gulp-concat-css');
var minify = require('gulp-minify-css');

// Compile CSS and Iconfont from style guide
gulp.task('styleguide', function() {
  return gulp.src('node_modules/change-styleguide/')
    .pipe(run('npm run build', {
      cwd: 'node_modules/change-styleguide'
    }));
});

// Concat styles and move to public dir
gulp.task('css', ['styleguide'], function() {
  return gulp.src(['node_modules/change-styleguide/public/boot.css', 'src/styles.css'])
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('public/'));
});
