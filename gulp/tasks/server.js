module.exports = function() {
  $.gulp.task('server', function() {
    $.browserSync.init({
      proxy: "json-test",
      https: false,
      open: false
    });
  });
}

