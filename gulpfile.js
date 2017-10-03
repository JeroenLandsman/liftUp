"use strict"

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs local dev server
var open = require('gulp-open'); //Open a URL in a web browser
var browserify = require('browserify'); // Bundle JS
//var reactify = require('reactify'); // Transforms React JSX to JS
var source = require('vinyl-source-stream'); //Use conventional text streams with Gulp
var sass = require('gulp-sass');
var concat = require('gulp-concat'); //Concatenates files
var lint = require('gulp-eslint'); //Lint JS files, including JSX

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        fonts: './src/fonts/**/*',
        html: './src/*.html',
        js: './src/**/*.js',
        images: './src/images/*',
        sass: [
            './src/sass/**/*.scss'
        ],
        dist: './dist',
        //mainJs: './src/main.js',
        fullScreenJs: './src/js/fullscreenForm.js',
        classiejs: './src/js/classie.js',
        modernizr: './src/js/modernizr.custom.js'
    }
}

//Start a local development server
gulp.task('connect', function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

gulp.task('open', ['connect'], function(){
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function(){
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function(){
    browserify([config.paths.classiejs, config.paths.fullScreenJs])
        //.transform(reactify)
        .bundle()
        .on('eror', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/leading.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function(){
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    //publish favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('fonts', function(){
    gulp.src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + '/fonts'))
        .pipe(connect.reload());
});

gulp.task('lint', function(){
    return gulp.src(config.paths.js)
        .pipe(lint({config: 'eslint.config.json'}))
        .pipe(lint.format());
});

gulp.task('watch', function(){
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.sass, ['sass']);
});

gulp.task('default', ['html', 'js', 'sass', 'images', 'fonts', 'open', 'watch']);