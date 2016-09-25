'use strict';

module.exports = function() {
  $.gulp.task('sprite', function () {
  var spriteData = gulp.src('./source/sprite/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    cssFormat: 'css',
    imgPath: '../img/sprite.png',
    padding: 70
  }));
  spriteData.img.pipe(gulp.dest($.config.root + '/assets/img'));
  spriteData.css.pipe(gulp.dest($.config.root + '/assets/css'));
});
};