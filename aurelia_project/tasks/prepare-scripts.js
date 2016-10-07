import gulp from 'gulp';
import project from '../aurelia.json';
import path from 'path';

export default function prepareScripts() {

  let source = 'tools';

  let taskFiles = gulp.src([
      path.join(source, 'require.js'),
      path.join(source, 'text.js')
    ])
    .pipe(gulp.dest(project.platform.output));

  return taskFiles;
}
