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

//   gulp.task('copy:src', function () {
//     return gulp.src(['src/**/*']).pipe(gulp.dest('dist'));
//   });

//   gulp.task('copy:assets', function () {
//     return gulp.src(['out/**/*']).pipe(gulp.dest('dist/assets'));
//   });

//   gulp.task('build:assets', function () {
//     return gulp
//       .src(['dist/assets/*.html'])
//       .pipe(
//         dom(function () {
//           return this.querySelectorAll('img').forEach((img) => {
//             img.setAttribute('src', 'Himanshu');
//           });
//         }),
//       )
//       .pipe(gulp.dest('dist/assets'));
//   });

//   gulp.task('watch', function () {
//     gulp.watch(
//       ['out/**/*'],
//       gulp.series('clean:assets', 'copy:assets', 'build:assets'),
//     );
//     gulp.watch(['src/**/*'], gulp.series('copy:src'));
//   });

gulp.task('default', gulp.series('build:images'));
