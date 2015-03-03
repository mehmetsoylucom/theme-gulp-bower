var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files'); 
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('lib'))
});

gulp.task('minify-css', function() {
  return gulp.src('lib/*.css')
    .pipe(sourcemaps.init())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib'));
});
 
gulp.task('compress', function() {
  gulp.src('lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('lib'))
});
