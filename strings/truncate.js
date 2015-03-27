"use_strict";

/**
 * limits [value] and the specified [length] and adds "..." (new length is length + 3) 
 * @param {string} value
 * @param {number} length
 */
function truncate(value, length)
{
    length = length || 0;
    value = "" + value; //to string
    return (value.length <= length) ? value : value.substring(0, length-3) + "...";
}
