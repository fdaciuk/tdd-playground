/* global define, exports, module */
(function ( factory ) {
    'use strict';
    /* istanbul ignore next */
    if ( typeof define === 'function' && define.amd ) {
        define( factory );
    }
    else if ( typeof exports === 'object' ) {
        exports = module.exports = factory();
    }
    else {
        this.Module = ( this.Module || {} );
        this.Module.WordWrapString = factory();
    }
})( function() {
    'use strict';

    var WordWrapString = function() {
        var $public = {};
        var $private = {};

        // ------------------------

        $public.wrap = function wrap( text, maxLength ) {
            var phraseStart = text.substr( 0, maxLength );
            var phraseEnd = text.substr( maxLength );

            if( ! maxLength || text.length <= maxLength ) {
                return text;
            }

            if( phraseEnd[0] === ' ' ) {
                phraseEnd = phraseEnd.slice( 1 );
            }

            return phraseStart + '\n' + phraseEnd;
        };

        // ------------------------

        return $public;
    };

    return WordWrapString;
});
