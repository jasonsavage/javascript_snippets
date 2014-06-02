"use_strict";

/**
 * wraps all occurrences of an @username mention in a string with an html <a /> tag and href pointing to [url] + username. 
 * @param {string} value
 * @param {string} url
 * @param {string} attrs (optional)
 */
function atUsernames(value, url, attrs)
{
    attrs = attrs || '';
    var pattern = /(^|\s)@(\w+)/g;
    return value.replace(pattern, '$1<a href="' + url + '$2" ' + attrs + '>@$2</a>' );
}