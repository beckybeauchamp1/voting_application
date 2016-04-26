var gulp = require("gulp");
var watch = require('gulp-watch');
var connect = require('gulp-connect');


// configuring tasks for html and js to watch for changes and automatically reload server/refresh brows
gulp.task('html', function(){
  return gulp.src('./public/**/*.html')
  .pipe(connect.reload());
});

gulp.task('js', function(){
  return gulp.src('./public/**/*.js')
  .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('./public/**/*.html', ['html'])
  gulp.watch('./public/**/*.js', ['js'])
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  })
});

gulp.task('default', ['html', 'js', 'connect', 'watch'])
