'use strict';

var should = require( 'should' );
var WordWrap = require( '../js/WordWrapString' )();
var wrap = WordWrap.wrap;

describe( 'WordWrapString.js', function() {
    it( 'should be true - TEST TOOL', function() {
        ( true ).should.be.ok;
    });

    it( 'should return the first param when the second param is null or undefined', function() {
        wrap( 'my string' ).should.be.equal( 'my string' );
    });

    it( 'should break the word on the space set on the second param', function() {
        wrap( 'string two', 6 ).should.be.equal( 'string\ntwo' );
    });

    it( 'should return the first param, if the second param is greater or equal text.length', function() {
        wrap( 'this phrase is very big', 25 ).should.be.equal( 'this phrase is very big' );
    });
});