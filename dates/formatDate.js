"use strict";

/**
 * Take a string value and formats it as a date ( MM/DD/YYYY ) 
 * @param {String} value
 * @returns {String} MM/DD/YYYY
 */
function formatDate( value )
{
    //change any seperators to /
    value = value.replace(/[\.\-\s]+/g, '/');

    //split month, day, year
    var p = value.split('/');

    //check correct length (3) parts
    if( p.length !== 3 ) { return value; }

    //convert each part to a number
    var m = parseInt(p[0]),
        d = parseInt(p[1]),
        y = parseInt(p[2]),
        r = '';

    //add month to return value (pad if needed and make sure we only take 2 chars at the most)
    r += ((m < 10) ? '0' : '') + m.toString().substr(0,2) + '/';

    //add day to return value (pad if needed and make sure we only take 2 chars at the most)
    r += ((d < 10) ? '0' : '') + d.toString().substr(0,2) + '/';

    if(y > 999)
    {
        //we have a 4 digit year 1000 - 9999 and make sure we only take 4 chars at the most
        r += y.toString().substr(0,4);
    }
    else
    {
        //date is a 2 char value 00 - 99 and make sure we only take 2 chars at the most

        //get current full year
        var year = new Date().getFullYear().toString(),
            tho = parseInt(year.substr(0,2)),
            ten = parseInt(year.substr(2)),
            thres = ten + 10,
            pad = (y < 10) ? '0' : '';

        r += (( y > thres ) ? tho - 1 : tho).toString() + pad + y.toString().substr(0,2);
    }

    return r;
}
