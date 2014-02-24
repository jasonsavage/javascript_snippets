"use_strict";

/**
 * sets the first character of each word to uppercase and removes all spaces 
 * @param {string} value
 * @param {Boolean} removeSpaces
 */
function toCamelCase(value, removeSpaces)
{
    removeSpaces = (removeSpaces === null) ? true : removeSpaces;
    
    var words = value.split(" ");
    for(var i = 0; i < words.length; i++)
    {
        words[i] = $.firstToUpper( words[i] );
    }
    return (removeSpaces)? words.join("") : words.join(" ");
}