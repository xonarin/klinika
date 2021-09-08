'use strict';
 
var gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
var concat = require('gulp-concat');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

gulp.task('fonts', function() { 
  gulp.src('./source/fonts/**') 
      .pipe(gulp.dest('./build/fonts')); 
});


gulp.task('style', function () {
    return gulp.src('./source/scss/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('index.css'))
      .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./build/css/'));
  });
  
  gulp.task('image', function(){
    gulp.src('source/image/**/*.{png,jpg,svg}')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 3}),
		]))
    .pipe(gulp.dest('./build/image'));
})

gulp.task('webp', function(){
  return gulp.src('./source/image/**/*.{png,jpg,svg}')
  .pipe(webp({quality: 75}))
  .pipe(gulp.dest('./build/image'));
})


gulp.task('compressjs', function() {
  gulp.src('./source/js/*.js')
    .pipe(minify({
        ext:{
            min : '-min.js '
        } ,
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    } ) )
    . pipe ( gulp . dest ( './build/js' ) )
} ) ;


gulp.task('watch', function(){
    gulp.watch('./source/scss/*.scss',  gulp.parallel('style'))
})

gulp.task('build', gulp.parallel('fonts', 'style', 'image', 'webp', 'compressjs', 'watch'));