module.exports = function() {
  $.gulp.task('img:dev', function()  {
    return $.gulp.src('src/img/*.{png,jpg,gif}')
      .pipe($.gulp.dest('build/img/'));
  });

  $.gulp.task('img:build', function()  {
    return $.gulp.src('src/img/*.{png,jpg,gif}')
      .pipe($.gp.tinypng('api_key'))
      .pipe($.gulp.dest('build/img/'));
  });
};
