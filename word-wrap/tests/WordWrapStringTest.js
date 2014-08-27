var should = require( 'should' );
var WordWrap = require( '../js/WordWrapString' )();

describe( 'WordWrapString.js', function() {
    it( 'should be true - TEST TOOL', function() {
        ( true ).should.be.ok;
    });

    it( 'should return the text passed on the first param', function() {
        var wordwrap = WordWrap.wrap( 'string' );
        wordwrap.should.be.equal( 'string' );
    });

    it( 'should return the first param when the second param is null or undefined', function() {
        var wordwrap = WordWrap.wrap( 'my string' );
        wordwrap.should.be.equal( 'my string' );
    });
});