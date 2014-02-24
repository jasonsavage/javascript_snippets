"use_strict";

/**
 * returns the query string from [url] as an object ( index.html?foo=yes&bar=yes = {foo:yes, bar:yes} ) 
 * @param {string} url
 */
function queryToObject(url)
{
    var pattern = /[\?&]([^&=]+)=([^&=]+)/g;
    var res = url.match(pattern);

    if(res !== null && res.length)
    {
        var obj = {};
        for(x in res)
        {
            var t = res[x].split("=");
            t[0] = t[0].substring(1);
            obj[t[0]] = t[1];
        }
        return obj;
    }

    return null;
}