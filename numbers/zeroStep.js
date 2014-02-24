"use strict";

/**
 * when called repeativly this method steps the supplied value to 0 based on increment, work of negative and positive numbers 
 * @param {number} value
 * @param {number} increment
 */
function zeroStep(value, increment)
{
    if(value > 0)
    {
        value -= increment;
        return (value < 0) ? 0 : value;
    }
    
    if(value < 0)
    {
        value += increment;
        return (value > 0) ? 0 : value;
    }
    
    return 0;
};