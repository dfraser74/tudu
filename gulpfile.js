var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var del = require('del');

gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ colapsewhitespace: true }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('styles', function() {
  return gulp.src('src/styles/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('images', function(){
    return gulp.src('src/images/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/assets/img'))
});

gulp.task('clean', function(){
    return del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img']);
});

gulp.task('default', ['clean'], function() {
  gulp.start('html', 'styles', 'scripts', 'images');
});
