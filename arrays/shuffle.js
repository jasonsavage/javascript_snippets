"use strict";

/**
 * shuffles the values of an array 
 * @param {array} value
 */    
function shuffle(value)
{
    for (var i = 0; i < value.length; i++) 
    {
        var pos = Math.random() * value.length;
        var temp = value[i];
        value[i] = value[pos];
        value[pos] = temp;
    }
    return value;
};