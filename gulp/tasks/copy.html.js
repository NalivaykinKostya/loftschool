'use strict';

module.exports = function() {
  $.gulp.task('copy:html', function() {
    return $.gulp.src('./source/template/**/*.*')
      .pipe($.gulp.dest($.config.root));
  });
};
