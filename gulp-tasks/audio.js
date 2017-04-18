// just copy audio to dist for this prototype
var gulp = require('gulp');

module.exports = function () {
	return gulp.src(global.devPath + '/audio/*')
          .pipe(gulp.dest(global.distPath + '/audio'));
};
