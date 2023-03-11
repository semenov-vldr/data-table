module.exports = function() {
  $.gulp.task('php:dev', function() {
    return $.gulp.src($.path.src + '/php/**/*.php')
      .pipe($.gulp.dest($.path.assets + '/php/'))
  })
}
