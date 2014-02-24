"use_strict";

/**
 * returns the port from [url] ( http://www.foo.com:80 = "80" ) 
 * @param {string} url
 */
function port(url) 
{
    var pattern = /:[0-9]+/;
    var res = url.match(pattern);
    return (res !== null && res.length) ? res[0] : null;
};