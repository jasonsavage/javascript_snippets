"use_strict";

/**
 * generates a code consisting of numbers and letters at the specified [length] (NOTE: excludes ambiguous letters and number [i10oq]) 
 * @param {number} length
 */
function generateCode(length)
{
    length = length || 5;
    var code = "";
    var chars = "abcdefghjklmnprstuvwxyz23456789"; //removed i10oq
    
    while (length--)
    {
        var i = Math.random() * chars.length;
        code += chars.charAt(i);
    }
    
    return code.toUpperCase();
}