"use_strict";

/**
 * removes empty whitespace from the end of a string 
 * @param {Object} value
 */
function trimRight(value)
{
    var pattern = /\s+$/g;
    return value.replace(pattern, "");
}