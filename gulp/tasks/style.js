/* ====================================
    stylus
==================================== */
var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var postcss     = require('gulp-postcss');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var config      = require('../config.js').style;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('style', function() {
    return gulp.src( config.src )
        .pipe(plumber())
        .pipe(stylus(config.settings.stylus))
        .pipe(postcss(config.settings.postcss))
        .pipe(gulp.dest( config.dest ))
        .pipe( browserSync.reload({stream:true}) );
});
