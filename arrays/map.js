"use strict";


/**
 * map creates a new array with the results of calling a provided function on every element in this array. 
 * @param {Object} arr
 * @param {Object} func
 */
function map(arr, func)
{
    var res = [];
    for(var i in obj)
        res.push( func(obj[i], i, obj) );
    return res;
};