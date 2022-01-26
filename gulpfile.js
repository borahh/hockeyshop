const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminWebp = require('imagemin-webp');
const extReplace = require('gulp-ext-replace');

gulp.task('build:images', function () {
  return gulp
    .src('src/images/*.{jpg,png}')
    .pipe(imagemin([imageminWebp({ quality: 70 })]))
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest('assets/images'));
});

gulp.task('default', gulp.series('build:images'));
