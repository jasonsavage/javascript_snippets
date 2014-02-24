"use_strict";

/**
 * fills an array with numbers from [start] to [end] 
 * @param {number} start
 * @param {number} end
 */
function range(start, end)
{
    if( end == start ) 
        return [start];
    
    if( end < start )
        return [end, start];
         
    arr = [];
    do arr.push(start);
    while(start++ < end);
    
    return arr;
}