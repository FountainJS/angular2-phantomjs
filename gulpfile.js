const path = require('path');

const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

// Load some files into the registry
const hub = new HubRegistry([
  'gulp_tasks/misc.js',
  'gulp_tasks/styles.js',
  'gulp_tasks/browsersync.js',
  'gulp_tasks/karma.js',
  'gulp_tasks/protractor.js',
  'gulp_tasks/build.js',
  'gulp_tasks/scripts.js',
  'gulp_tasks/systemjs.js'
]);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('build', gulp.series(gulp.parallel('systemjs', 'systemjs:html', 'styles', 'other'), 'build'));
gulp.task('test', gulp.series('karma:single-run'));
gulp.task('test:auto', gulp.series('karma:auto-run'));
gulp.task('serve', gulp.series(gulp.parallel('scripts', 'styles'), 'watch', 'browsersync'));
gulp.task('serve:dist', gulp.series('default', 'browsersync:dist'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

function watch(done) {
  gulp.watch(path.join(conf.paths.src, '**/*.html'), browserSync.reload);
  gulp.watch([
    path.join(conf.paths.src, '**/*.scss'),
    path.join(conf.paths.src, '**/*.css')
  ], gulp.series('styles'));
  gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), gulp.series('scripts'));
  done();
}
