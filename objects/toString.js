"use_strict";

/**
 * converts an object to a string ( {dog = 'ben', cat = 'mark'} )
 * @param {Object} obj
 */
function toString(obj)
{
    ret = [];
    for( item in obj ) {
        ret.push(item + ' = "' + obj[item] + '"');
    }
    return '{' + ret.join(', ') + '}';
}