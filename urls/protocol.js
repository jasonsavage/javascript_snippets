"use_strict";

/**
 * returns the protocol from [url] ( http://www.foo.com = "http:" ) 
 * @param {string} url
 */
function protocol(url) 
{
    var pattern = /^\w+:/;
    var res = url.match(pattern);
    return (res !== null && res.length) ? res[0] : null;
}