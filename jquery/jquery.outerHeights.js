
"use_strict";

/**
 * calls outerHeight() on each selected element and returns a jquery array of values.
 * @param {jQuery object}  
 */
$.fn.outerHeights = function( includeMargin )
{
    includeMargin = (typeof includeMargin === 'boolean' && includeMargin);
    return $(this).map(function(i, ele) {
        return $(ele).outerHeight( includeMargin );
    });
};
