"use_strict";

/**
 * Checks is the supplied [value] is an array 
 * @param {*} value
 */
function isArray(value)
{
    return value instanceof Array;
    //return value.length === +value.length; //from underscore
}
