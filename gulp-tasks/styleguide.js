var gulp = require("gulp");
var run = require('gulp-run');

gulp.task('styleguide', function () {
  return gulp.src('node_modules/change-styleguide/')
    .pipe(run('npm run build', {
      cwd: 'node_modules/change-styleguide'
    }));
});
