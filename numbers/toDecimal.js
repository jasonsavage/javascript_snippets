"use_strict";

/**
 * converts [value] to a deciaml 
 * @param {number/string} value
 */
function toDecimal(value)
{
    var i = value.indexOf("%");
    if (i !== -1)
        value = value.substring(0, i);
        
    var num = parseFloat(value);
    num /= 100;
        
    return num;
}  