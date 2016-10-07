import gulp from 'gulp';
import project from '../aurelia.json';
import path from 'path';
import del from 'del';

export default function prepareOutput() {

  return del([
    path.join(project.platform.output, '**/*.*')
  ]);

}
