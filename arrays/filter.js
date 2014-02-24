"use strict";


/**
 * filter calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a true value.  
 * @param {Object} arr
 * @param {Object} func
 */
function filter(arr, func)
{
    var res = [];
    for(var i in obj)
        if( func(obj[i], i, obj) )
            res.push( obj[x] );
    return res;
};