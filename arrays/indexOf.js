"use_strict";

/**
 * gets the index in the array that the [value] is at 
 * @param {Object} value
 * @param {array} arr
 */
function indexOf(value, arr)
{
    for( var i in arr )
        if( arr[i] === value )
            return i;
    return -1;
}