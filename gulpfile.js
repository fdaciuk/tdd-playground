'use strict';

var gulp = require( 'gulp' );
var plumber = require( 'gulp-plumber' );
var mocha = require( 'gulp-mocha' );
var istanbul = require( 'gulp-istanbul' );

gulp.task( 'mocha', function() {
    gulp.src( 'word-wrap/tests/*.js', { read : false })
    .pipe( mocha({ reporter: 'list' }) );
});


gulp.task('test', function ( cb ) {
  gulp.src([ 'word-wrap/js/*.js' ])
    .pipe( istanbul() )
    .pipe( plumber() )
    .on( 'finish', function () {
      gulp.src([ 'word-wrap/tests/*.js' ])
        .pipe( mocha({ reporter: 'list' }) )
        .pipe( istanbul.writeReports() )
        .on( 'end', cb );
    });
});


gulp.task( 'default', function() {
    gulp.watch( 'word-wrap/{js,tests}/*.js', [ 'test' ]);
});