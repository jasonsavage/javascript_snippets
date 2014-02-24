"use_strict";

/**
 * returns the host from [url] ( http://www.foo.com = "www.foo.com" ) 
 * @param {string} url
 */
function host(url) 
{
    var pattern = /\/\/[\w|.|-]+/;
    var res = url.match(pattern);
    return (res !== null && res.length) ? res[0].toString().substring(2) : null;
}