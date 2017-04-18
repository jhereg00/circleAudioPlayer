/**
 *  All gulp tasks are stored in separate files/folders and just included here for neatness
 */
// dev flag?
if (process.argv.indexOf('--dev') != -1)
  global.devMode = true;
global.devPath = 'dev';
global.distPath = 'dist';

global.serverPort = 8001;

var gulp = require('gulp');
var webserver = require('gulp-webserver');
gulp.task('sass',require('./gulp-tasks/sass'));
gulp.task('scripts',['lint'],require('./gulp-tasks/scripts'));
gulp.task('images',require('./gulp-tasks/images'));
gulp.task('html',require('./gulp-tasks/html'));
gulp.task('audio',require('./gulp-tasks/audio'));
// gulp.task('autoguide',require('./gulp-tasks/autoguide'));
gulp.task('lint',require('./gulp-tasks/lint'));
gulp.task('lint-fix',require('./gulp-tasks/lint').fix);

// start a server for easy dev
gulp.task('server',require('./gulp-tasks/webserver'));

// watch
gulp.task('watch',['build'], function () {
  global.devMode = true;
  // gulp.watch([global.devPath + '/scss/**/*'],['sass','autoguide']);
  gulp.watch([global.devPath + '/js/**/*'],['scripts']);
  gulp.watch([global.devPath + '/images/**/*'],['images']);
  gulp.watch([global.devPath + '/audio/**/*'],['audio']);
  gulp.watch([global.devPath + '/**/*.html'],['html']);
});
// watch alias
gulp.task('dev',['watch'],require('./gulp-tasks/webserver'));

// build
gulp.task('build',['scripts','images','audio','html']);
