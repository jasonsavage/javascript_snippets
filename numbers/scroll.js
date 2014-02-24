"use strict";

/**
 * calculates content scroll position 
 * @param {number} thumbPos
 * @param {number} thumbMax
 * @param {number} contentPos
 * @param {number} contentMax
 */
function scroll(thumbPos, thumbMax, contentPos, contentMax)
{
    contentMax = contentMax + contentPos;
    return Math.floor(((thumbPos / thumbMax) * contentMax) - contentPos);
};