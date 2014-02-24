"use_strict";

/**
 * returns the query string from [url]
 * @param {string} url
 */
function queryString(url)
{
    var pattern = /[\?&]([^&=]+)=([^&=]+)/g;
    return url.match(pattern).join('');
}