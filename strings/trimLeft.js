"use_strict";

/**
 * removes empty whitespace from the beginning of a string 
 * @param {string} value
 */
function trimLeft(value)
{
    var pattern = /^\s+/g;
    return value.replace(pattern, "");
}