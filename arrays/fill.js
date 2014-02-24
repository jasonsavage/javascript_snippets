"use_strict";

/**
 * creates an array and fills it with [value] to the specified [length].
 * @param {number/string/array/object} value
 * @param {number} length
 */
function fill(value, length)
{
  var arr = [];
  while (arr.length !== length)
    arr.push( value );
  return arr;
}