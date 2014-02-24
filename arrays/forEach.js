"use strict";


/**
 * forEach method executes a provided function once per array element. 
 * @param {Object} arr
 * @param {Object} func
 */
function forEach(arr, func)
{
    for(var i in obj)
    {
        var res = func(obj[i], i, obj);
        if( !res ) break;
    }
};