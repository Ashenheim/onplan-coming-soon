/* ====================================
    Watch
==================================== */
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config      = require('../config.js');


/*
    Tasks & Functions
------------------------------------ */

gulp.task('watch:html', function() {
    gulp.watch( config.html.src ).on('change', browserSync.reload);
})

gulp.task('watch:style', function() {
    gulp.watch( config.style.watch, ['style']);
});

gulp.task('watch', ['watch:html', 'watch:style']);
