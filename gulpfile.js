'use strict';

var concat = require('gulp-concat');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify = require('gulp-uglify');

var paths = {
  html: 'src/html/**/*.html',
  less: 'src/less/**/*.less',
  js: 'src/js/**/*.js',
  dist: 'dist/**/*'
};

// bundle js
gulp.task('js', ['templates'], function() {
  return gulp.src(['src/js/index.js', 'tmp/templates.js'])
    .pipe(concat('angular-slidedeck.js'))
    .pipe(gulp.dest('dist'));
});

// bundle html templates via angular's templateCache
gulp.task('templates', function() {
  return gulp.src(paths.html, {base: 'src/html'})
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(templateCache({
      root: 'ngSlidedeckTemplates/',
      standalone: true,
      module: 'ngSlidedeckTemplates',
      base: function(file) {
        return file.relative;
      }
    }))
    .pipe(gulp.dest('tmp'));
});

// minify js
gulp.task('js-min', ['js'], function() {
  return gulp.src('dist/angular-slidedeck.js')
    .pipe(rename('angular-slidedeck.js.min'))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('dist'));
});

// compile less to css
gulp.task('css', function() {
  return gulp.src('src/less/index.less')
    .pipe(less())
    .pipe(rename('angular-slidedeck.css'))
    .pipe(gulp.dest('dist'));
});

// minify css
gulp.task('css-min', ['css'], function() {
  return gulp.src('dist/angular-slidedeck.css')
    .pipe(rename('angular-slidedeck.css.min'))
    .pipe(minifyCSS({restructuring: false}))
    .pipe(gulp.dest('dist'));
});

// bower
gulp.task('bower', function() {
  return gulp.src('bower.json.in')
    .pipe(rename('bower.json'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js-min', 'css-min', 'bower']);
