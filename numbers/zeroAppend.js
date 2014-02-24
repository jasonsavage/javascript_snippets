"use strict";

/**
 * adds [n] zeros to the end of a string/number 
 * @param {number/string} value
 * @param {number} places
 */
function zeroAppend(value, places)
{
    places = parseInt(places) || 0;
    while(places--)
        value += "0";
    return value;
};