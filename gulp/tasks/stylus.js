/* ====================================
    stylus
==================================== */
var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var plumber     = require('gulp-plumber');
var browserSync = require('browser-sync');
var config      = require('../config.js').stylus;


/*
    Tasks & Functions
------------------------------------ */

gulp.task('style', function() {
    return gulp.src( config.src )
        .pipe(plumber())
        .pipe(stylus(config.settings))
        .pipe(gulp.dest( config.dest ))
        .pipe( browserSync.reload({stream:true}) );
});
