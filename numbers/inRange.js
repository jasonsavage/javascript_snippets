"use strict";

/**
 * returns true if [value] is close to the [target] number based on + or - [range] 
 * @param {number} value
 * @param {number} target
 * @param {number} range
 */
function inRange(value, target, range)
{
    range = range || 1;
    return (value < (target + range) &&  value > (target - range));
}