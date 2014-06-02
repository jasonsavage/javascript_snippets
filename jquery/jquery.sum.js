
"use_strict";

/**
 * adds all the values in an array together and returns the total
 * @param {Number} 
 */
$.fn.sum = function()
{
    sum = 0;
    $(this).each(function(i, ele) {
        sum += ele;
    });
    return sum;
};