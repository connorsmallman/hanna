const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', () => {
  return gulp.src('./sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles'));
});

gulp.task('views', () => {
  return gulp.src('./views/**/*.pug')
    .pipe(gulp.dest('./dist/views'));
});

gulp.task('default', gulp.parallel('styles', 'views'));
