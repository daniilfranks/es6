module.exports = function() {
  
  $.gulp.task('scripts:lib', function()  {
    return $.gulp.src(['node_modules/babel-polyfill/dist/polyfill.min.js','node_modules/js-cookie/src/js.cookie.js'])
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gulp.dest('build/js/'))
      .pipe($.bs.reload({
        stream:true
      }));
  });
  

  $.gulp.task('scripts', function(){
    return $.gulp.src('src/js/*.js')       
      .pipe($.gp.babel({
        presets: ['es2015']
      }))
      //.pipe($.gp.uglify())
      .pipe($.gulp.dest('build/js'))
      .pipe($.bs.reload({
        stream:true
      }));
  })
};


