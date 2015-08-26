var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var nib         = require('nib');
var typographic = require('typographic');
var plumber     = require('gulp-plumber');


var files = {
    stylus: {
        src: 'stylus/style.styl',
        dest: 'css/',
        watch: [
            'stylus/*.styl',
            'stylus/**/*.styl'
        ]
    }
}


gulp.task('style', function() {
    return gulp.src( 'stylus/style.styl' )
        .pipe(plumber())
        .pipe(stylus({
            use: [
                typographic(),
                nib()
            ]
        }))
        .pipe(gulp.dest( files.stylus.dest ));
});

gulp.task('watch:style', function() {
    gulp.watch( files.stylus.watch, ['style']);
})

gulp.task('default', ['style', 'watch:style'])
