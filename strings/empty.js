"use_strict";

/**
 * checks if the supplied [object] is empty. 
 * @param {Object} str
 */
function empty(obj)
{
    if(typeof obj === 'undefined' || obj === null || obj === '' || obj === false) return true; //empty
    if(typeof obj === 'number' && obj > 0) return false;
    if(typeof obj === 'boolean' && obj) return false;
    if(typeof obj === 'object') for(item in obj) return false;
    
    return true;
}