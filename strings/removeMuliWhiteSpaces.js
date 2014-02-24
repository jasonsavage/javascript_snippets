"use_strict";

/**
 * removes any extra whitespace in [the string]value] 
 * @param {string} value
 */
function removeMuliWhiteSpaces(value)
{
    var pattern = /[\s]{2,}/g; 
    return value.replace(pattern, " ");
}