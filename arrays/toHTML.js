"use_strict";

/**
 * converts an array to a html string 
 * @param {Object} arr
 */
function toHTML(arr)
{
    return '<ul><li>' + arr.join('</li><li>') + '</li></ul>';
}