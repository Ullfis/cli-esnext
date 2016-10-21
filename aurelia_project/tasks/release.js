import gulp from 'gulp';
import project from '../aurelia.json';
import path from 'path';
import del from 'del';

let dist = 'release';
let rootFiles = [
  'favicon.ico',
  'index.html'
];

export default gulp.series(
  deleteFolder,
  gulp.parallel(
    copyRoot,
    copyScripts,
    copyStyles,
    copyFonts
  )
);

function deleteFolder() {
  return del([
    path.join(dist, '**/*')
  ]);
}
function copyRoot() {
  return gulp.src(rootFiles).pipe(gulp.dest(dist));
}
function copyScripts() {
  return gulp.src('scripts/**/*.*')
    .pipe(gulp.dest(path.join(dist, 'scripts')));
}
function copyStyles() {
  return gulp.src('styles/**/*.*')
    .pipe(gulp.dest(path.join(dist, 'styles')));
}
function copyFonts() {
  return gulp.src('fonts/**/*.*')
    .pipe(gulp.dest(path.join(dist, 'fonts')));
}
