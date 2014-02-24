"use_strict";

/**
 * converts an array to a json string 
 * @param {Object} arr
 */
function toJSON(arr)
{
    return '[' + arr.join(',') + ']';
}