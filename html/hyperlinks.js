"use_strict";

/**
 * wraps all occurrences of a url in a string with an html <a /> tag. 
 * @param {string} value
 * @param {string} attrs (optional)
 */
function hyperlinks(value, attrs)
{
    attrs = attrs || '';
    var pattern = /(^|\s)h(ttp(s*):\/\/[\w.\/]+)/g;
    return value.replace(pattern,  '$1<a href="h$2" ' + attrs + '>h$2</a>'); 
}