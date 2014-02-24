"use strict";

/**
 * converts a slope to degrees 
 * @param {number} slope
 */
function slopeToDegrees(slope)
{
    return Math.atan(slope) * 180/Math.PI;
}