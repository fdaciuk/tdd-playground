(function (factory ) {
    'use strict';
    if ( typeof define === 'function' && define.amd ) {
        define( factory );
    }
    else if ( typeof exports === 'object' ) {
        exports = module.exports = factory();
    }
    else {
        root.Module = ( root.Module || {} );
        root.Module.WordWrapString = factory();
    }
})( function() {
    'use strict';

    var WordWrapString = function() {
        var $public = {};
        var $private = {};

        // ------------------------

        $public.wrap = function wrap( text, maxLength ) {
            return 'string';
        }

        // ------------------------

        return $public;
    };

    return WordWrapString;
});
