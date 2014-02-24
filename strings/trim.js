"use_strict";

/**
 * removes empty whitespace from the front and end of a string 
 * @param {string} value
 */
function trim(value)
{
    var pattern = /^\s+|\s+$/g;
    return value.replace(pattern, "");
}