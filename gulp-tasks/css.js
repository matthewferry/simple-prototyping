var gulp = require('gulp');

gulp.task('css', ['styleguide'], function() {
  return gulp.src('node_modules/change-styleguide/public/boot.css')
    .pipe(gulp.dest('./dist'));
});
