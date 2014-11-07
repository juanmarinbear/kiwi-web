var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    minifyHtml = require('gulp-minify-html'),
    ngHtml2Js = require('gulp-ng-html2js'),
    cache = require('gulp-cache'),
    jsoncombine = require("gulp-jsoncombine"),
    livereload = require('gulp-livereload'),
    util = require('util'),
    del = require('del');

var paths = {
  'dist': 'dist',
  'vendor': {
    'scripts': [
      'src/bower_components/jquery/dist/jquery.min.js',
      'src/bower_components/angular/angular.min.js',
      'src/bower_components/angular-animate/angular-animate.min.js',
      'src/bower_components/angular-sanitize/angular-sanitize.min.js',
      'src/bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ],
    'styles': [
      'src/bower_components/pure/base-min.css',
      'src/bower_components/pure/grids-min.css',
      'src/bower_components/pure/grids-responsive-min.css',
      'src/bower_components/pure/menus-min.css',
      'src/bower_components/pure/buttons-min.css',
      'src/bower_components/pure/forms-min.css',
      'src/bower_components/ionicons/css/ionicons.min.css'
    ],
  },
  'scripts': [
    'src/app.js',
    'src/app-controller.js',
    'src/components/**/!(*_test.js).js',
    'src/company/**/!(*_test.js).js',
    'src/contact/**/!(*_test.js).js',
    'src/customer/**/!(*_test.js).js',
    'src/home/**/!(*_test.js).js',
    'src/services/**/!(*_test.js).js',
    'src/support/**/!(*_test.js).js'
  ],
  'styles': [
    'src/styles/*.css'
  ],
  'templates': [
    'src/components/**/*.html',
    'src/company/**/*.html',
    'src/contact/**/*.html',
    'src/customer/**/*.html',
    'src/home/**/*.html',
    'src/services/**/*.html',
    'src/support/**/*.html'
  ],
  'languages': [
    'src/components/**/*.json',
    'src/company/**/*.json',
    'src/contact/**/*.json',
    'src/customer/**/*.json',
    'src/home/**/*.json',
    'src/services/**/*.json',
    'src/support/**/*.json'
  ],
  'images' : [
    'src/media/images/**/*.jpg' 
  ],
  'fonts': [
    'src/fonts/**/*'
  ]
};

gulp.task('vendorStyles', function () {
  return gulp.src(paths.vendor.styles)
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest(paths.dist + '/styles'))
    .pipe(notify('Vendor Styles task complete!'));
});

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest(paths.dist + '/styles'))
    .pipe(notify('Styles task complete!'));
});

gulp.task('modules', function () {
  return gulp.src(paths.vendor.scripts)
    .pipe(concat('modules.min.js'))
    .pipe(gulp.dest(paths.dist + '/scripts'))
    .pipe(notify('Modules task complete!'));
});

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('scripts.min.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(paths.dist + '/scripts'))
    .pipe(notify('Scripts task complete!'));
});

gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(ngHtml2Js({
      moduleName: 'templates'
    }))
    .pipe(concat("templates.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + '/templates'))
    .pipe(notify('Templates task complete!'));
});

gulp.task('languages', function () {

  var TEMPLATE = "angular.module(\'%s\', []).run([\'$templateCache\', function($templateCache) {\n" +
    "  $templateCache.put(\'%s\',\n    %s);\n" +
    "}]);\n";

  return gulp.src(paths.languages)
    .pipe(jsoncombine('language_default.min.js', function (data) {
      return new Buffer(util.format(TEMPLATE, 'languages', 'language_default', JSON.stringify(data)), 'utf-8');
    }))
    .pipe(gulp.dest(paths.dist + '/languages'))
    .pipe(notify('Languages task complete!'));
});

gulp.task('images', function () {
  return gulp.src(paths.images)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(paths.dist + '/media/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('fonts', function () {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.dist + '/fonts'))
    .pipe(notify({ message: 'Fonts task complete' }));
});

gulp.task('clean', function(cb) {
  del([
    paths.dist + '/styles', 
    paths.dist + '/scripts', 
    paths.dist + '/templates', 
    paths.dist + '/media', 
    paths.dist + '/fonts', 
    paths.dist + '/languages'], cb)
});

gulp.task('default', ['clean'], function () {
  gulp.start('vendorStyles', 'styles', 'modules', 'scripts', 'templates', 'languages', 'fonts', 'images');
});
