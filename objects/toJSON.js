"use_strict";

/**
 * converts an object to a json string ( {"dog" : "ben", "cat" : "mark"} )
 * @param {Object} obj
 */
function toJSON(obj)
{
    ret = [];
    for( item in obj ) {
        ret.push('"' + item + '" : "' + obj[item] + '"');
    }
    return '{' + ret.join(', ') + '}';
}