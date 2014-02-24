"use_strict";

/**
 * counts the number of words in a string 
 * @param {string} value
 */
function wordCount(value)
{
    var pattern = /\b\w+\b/g;
    return value.match(pattern).length;
}