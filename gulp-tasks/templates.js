var gulp = require('gulp');
var cache = require('gulp-cached'); // create template cache to save on build
var data = require('gulp-data');
var plumber = require('gulp-plumber'); // used for error catching during watch
var swig = require('gulp-swig');
var fm = require('front-matter');

// Compile the templates into html and move to public dir
gulp.task('templates', function() {
  gulp.src(['src/templates/**/*.html', '!src/templates/**/*.swg'])
    .pipe(cache('templateCache'))
    .pipe(data(function(file) {
        var content = fm(String(file.contents));
        file.contents = new Buffer(content.body);
        return content.attributes;
      })
    )
    .pipe(plumber())
    .pipe(swig())
    .pipe(gulp.dest('public/'))
});
