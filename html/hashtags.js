"use_strict";

/**
 * wraps all occurrences of a #hashtag in a string with an html <a /> tag and href pointing to [url] + # + hashtag. 
 * @param {string} value
 * @param {string} url
 * @param {string} attrs (optional)
 */
function hashtags(value, url, attrs)
{
    attrs = attrs || '';
    var pattern = /(^|\s)#(\w+)/g;
    return value.replace(pattern, '$1<a href="' + url + '%40$2" ' + attrs + '>#$2</a>');
}