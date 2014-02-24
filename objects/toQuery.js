"use_strict";

/**
 * converts an object to a query string ( ?dog=ben&cat=mark )
 * @param {Object} obj
 */
function toQuery(obj)
{
    ret = [];
    for( item in obj ) {
        ret.push(item + '=' + obj[item]);
    }
    return '?' + ret.join('&');
}