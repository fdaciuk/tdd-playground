var should = require( 'should' );
var WordWrap = require( '../js/WordWrapString' )();

describe( 'WordWrapString.js', function() {
    it( 'should be true - TEST TOOL', function() {
        ( true ).should.be.ok;
    });

    it( 'should return the own text on the first param', function() {
        var wordwrap = WordWrap.wrap( 'string' );
        wordwrap.should.be.equal( 'string' );
    });
});