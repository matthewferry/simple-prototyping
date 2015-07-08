var gulp = require('gulp');
var swig = require('gulp-swig');
var data = require('gulp-data');
var path = require('path');

var getJsonData = function(file) {
  return require('../src/' + path.basename(file.path) + '.json');
};

gulp.task('html', function() {
  gulp.src('./src/*.html')
    .pipe(data(getJsonData).on('error', errorHandler))
    .pipe(swig())
    .pipe(gulp.dest('./dist/'))
});

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
