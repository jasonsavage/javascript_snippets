"use_strict";

/**
 * returns the anchor from [url] ( index.html#topOfPage = "#topOfPage" ) 
 */
function hash(url)
{
    if(typeof url.hash === "function")
        return url.hash;
    
    var pattern = /#.*/;
    var res = url.match(pattern);
    return (res !== null && res.length) ? res[0] : null;
}