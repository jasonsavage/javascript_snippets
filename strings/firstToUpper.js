"use_strict";

/**
 * sets the first character of each word to uppercase 
 * @param {string} value
 */
function firstToUpper(value)
{
    return value.charAt(0).toUpperCase() + value.substr(1);
}