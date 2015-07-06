"use strict";

/**
 * adds [n] zeros to the beginning of a string/number 
 * @param {number/string} value
 * @param {number} places
 */
function zeroPrepend(value, places) {
    places = parseInt(places) || 0;
    value = "" + value; //to string
    while(value.length < places) {
        value = "0" + value;
    }
    return value;
}
