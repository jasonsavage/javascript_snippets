"use strict";

/**
 * steps [value] towards [target] at the rate of [constant] creating a a basic easing effect 
 * @param {number} current
 * @param {number} target
 * @param {number} constant
 */
function chase(current, target, constant)
{
    var change = (target - current) / constant;
    return current + change;
} 