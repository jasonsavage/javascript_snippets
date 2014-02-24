"use_strict";

/**
 * limits [value] and the specified [length] and adds "..." (new length is length + 3) 
 * @param {string} value
 * @param {number} length
 */
function truncate(value, length)
{
    length = length || 0;
    if (value.length <= length)
        return value;
        
    return value.substring(0, length) + "...";
}