"use_strict";

/**
 * adds 'st', 'nd', 'rd', 'th' to the number and returns it as a string 
 * @param {Number} value
 */
function toOrdinalNumber(value)
{
    var d = value.toString();
    return (d == 1 ? d + 'st' : (d == 2 ? d + 'nd' : (d == 3 ? d + 'rd' : d + 'th')));
}