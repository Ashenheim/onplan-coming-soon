/* ====================================
    Watch
==================================== */
var gulp        = require('gulp');
var config      = require('../config.js');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch:style', function() {
    gulp.watch( config.stylus.watch, ['style']);
});

gulp.task('watch', ['watch:style']);
