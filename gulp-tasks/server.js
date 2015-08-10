var gulp = require('gulp');
var del = require('del');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('public/')
    .pipe(webserver({
      host: 'localhost',
      port: process.env.NODE_PORT || process.env.PORT || 8001,
      livereload: true,
      open: true
    }));
});

// Clean build dir if it exists
gulp.task('clean-build-dir', function(cb) {
  del(['public/**'], cb);
});

// Build CSS and templates
gulp.task('build', ['css', 'js', 'templates'])

// Serve and watch the files for changes
gulp.task('server', ['webserver', 'watch']);
