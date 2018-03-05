module.exports = function() {
  $.gulp.task('deploy', function() {
    return $.gulp.src('build/**')
      .pipe(($.gp.rsync({
        root: 'build/',
        hostname: 'r950321f@r950321f.beget.tech',
        destination: 'r950321f.beget.tech/public_html',
        archive: true,
        silent: false,
        compress: true
      })));
  });
};
