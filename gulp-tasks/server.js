var gulp = require('gulp');
var server = require('gulp-serve');

gulp.task('server', ['css', 'html'], server({
  root: 'dist',
  port: process.env.NODE_PORT || process.env.PORT || 8080
}));
