"use_strict";

/**
 * returns a randowm number between 0 and [max] 
 * @param {number} max
 */
function random(max)
{
    max = max || 1;
    return Math.random() * max;
}