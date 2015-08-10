var gulp = require('gulp');

// Rerun the templates build task when a file changes
gulp.task('watch', function(){
  gulp.watch(['src/**/*.html', 'src/**/*.swg'], ['templates']);
  gulp.watch('src/*.css', ['css']);
  gulp.watch('src/*js', ['js']);
});
