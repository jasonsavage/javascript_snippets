"use strict";

/**
 * rounds [value] to a specific decimal place 
 * @param {number} value
 * @param {number} places
 */
function round(value, places)
{
    var exp = Math.pow(10, places); 
    return Math.round(value * exp) / exp;
}