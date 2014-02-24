"use_strict";

/**
 * returns all html elements that match the specified [selector]
 * @param {Object} selector
 */
function getElement(selector)
{
    if( selector.charAt(0) === '#' )
        return document.getElementById( selector.substr(1) );
        
    if( selector.charAt(0) === '.' )
        return document.getElementsByClassName( selector.substr(1) );
    
    return null;
}