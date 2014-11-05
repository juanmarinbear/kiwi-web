var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    jsonminify = require('gulp-jsonminify'),
    notify = require('gulp-notify'),
    minifyHtml = require('gulp-minify-html'),
    ngHtml2Js = require('gulp-ng-html2js'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

var paths = {
  'dist': 'dist',
  'modules': [
    'src/bower_components/jquery/dist/jquery.js',
    'src/bower_components/angular/angular.js',
    'src/bower_components/angular-animate/angular-animate.js',
    'src/bower_components/angular-sanitize/angular-sanitize.js',
    'src/bower_components/angular-ui-router/release/angular-ui-router.js'
  ],
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
    'src/bower_components/pure/base.css',
    'src/bower_components/pure/grids.css',
    'src/bower_components/pure/grids-responsive.css',
    'src/bower_components/pure/menu.css',
    'src/bower_components/pure/buttons.css',
    'src/bower_componetns/pure/forms.css',
    'src/bower_components/ionicons/css/ionicons.css',
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
  'fonts': [
  ],
  'lang': [
  ]
};

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(concat('main.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(paths.dist + '/styles'))
    .pipe(notify('Styles task complete!'));
});

gulp.task('modules', function () {
  return gulp.src(paths.modules)
    .pipe(concat('modules.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + '/scripts'))
    .pipe(notify('Modules task complete!'));
});

gulp.task('scripts', function () {
  return gulp.src(paths.scripts)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('scripts.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
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
      moduleName: function (file) {
        var path = JSON.stringify(file).split('/'),
        folder = path[path.length - 2];
        return folder.replace(/-[a-z]/g, function (match) {
          return match.substr(1).toUpperCase();
        });
      }
    }))
    .pipe(concat("templates.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('dist/templates'))
    .pipe(notify('Templates task complete!'));
});

gulp.task('default', function () {
  gulp.start('styles', 'modules', 'scripts', 'templates');
});
