'use strict';

var gulp = require( 'gulp' );
var mocha = require( 'gulp-mocha' );

gulp.task( 'mocha', function() {
    gulp.src( 'word-wrap/tests/*.js', { read : false })
    .pipe(
        mocha(
            { reporter: 'list' }
        )
    );
});

gulp.task( 'default', function() {
    gulp.watch( 'word-wrap/tests/*.js', [ 'mocha' ] );
});