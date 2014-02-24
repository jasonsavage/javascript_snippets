"use_strict";

/**
 * removes any html tags from [value] 
 * @param {string} value
 */
function stripTags(value)
{
    var pattern = /<\/?[^>]+>/igm;
    return value.replace(pattern, "");
}