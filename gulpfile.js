var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
})

gulp.task('sass', function(){
  return gulp.src('scss/styleshell.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(minifyCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('css'))
});
