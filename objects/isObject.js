"use_strict";

/**
 * Checks is the supplied [value] is an object 
 * @param {*} value
 */
function isObject(value)
{
    return (typeof value === 'object' && value.constructor !== Array);
}