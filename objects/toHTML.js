"use_strict";

/**
 * converts an object to a html string
 * @param {Object} obj
 */
function toHTML(obj)
{
    ret = [];
    for( item in obj ) {
        ret.push('<dt>' + item + '</dt><dd>' + obj[item] + '</dd>');
    }
    return '<dl>' + ret.join(' ') + '</dl>';
}