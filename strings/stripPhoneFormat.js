"use_strict";

/**
 * removes any phone number formatting in [value] 
 * @param {string} value
 */
function stripPhoneFormat(value)
{ 
    var pattern = /[\.\(\)\-\s]?/g; 
    return value.replace(pattern, "");
}