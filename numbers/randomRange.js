"use strict";

/**
 * returns a random number between [min] and [max] 
 * @param {number} min
 * @param {number} max
 */
function randomRange(min, max)
{
    return (Math.random() * (max-min)) + min;
}