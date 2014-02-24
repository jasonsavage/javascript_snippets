"use_strict";

/**
 * simple US currency formatter 
 * @param {Object} value
 */
function toUSCurrency(value)
{ 
    var str = value.toString();
    if(str.indexOf(".") === -1)
    {
        str = str + ".00";
    }
    else
    {
        var arr = str.split(".");
        if(arr[1].length > 1)
        {
            arr[1] = String(arr[1]).substr(0, 1);
        }
        else if(arr[1].length <= 1)
        {
            arr[1] += "0";
        }
        str = arr.join(".");
    }
    
    return str;
};