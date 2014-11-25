"use strict";

/**
 * Check if the date string is a vaild date. Method expects date string to be formated as MM/DD/YYYY 
 * @param {String} value
 */
function validateDate( value )
{
    //split month, day, year
    var p = value.split('/'),
        days = [0,31,28,31,30,31,30,31,31,30,31,30,31]; //match index with m variable

    //check correct length (3) parts
    if( p.length != 3 ) { return false; }

    var m = parseInt(p[0]),
        d = parseInt(p[1]),
        y = parseInt(p[2]);

    //check if year is between 1000 and 9999
    if(y < 1000 || y > 9999) { return false; }//year is invalid

    //check if month is between 1 and 12
    if( m < 1 || m > 12 ) { return false; }//month is invalid

    //check if day is between 1 and 31
    if( d < 1 || d > 31 ) { return false; }//day is invalid

    //check for leap year
    if( ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0)) {
        days[2] = 29; //set feb to 29 days on month
    }

    if( d > days[m] ) { return false; }//invalid number for day based on days in each month

    //date is valid
    return true;
}
