/**
 * Sorts array values based on string values (case-insensitive)
 * example: myArray.sort(stringSorter);
 *
 * @param  valueA   first value to compare
 * @param  valueB   second value to compare
 * @return          1, -1, 0
 */
function stringSorter(valueA, valueB) {
    valueA = valueA.toString().toLowerCase();
    valueB = valueB.toString().toLowerCase();
    return valueA.localeCompare(valueB);
}

/**
 * Sorts array of objects based on string values (case-insensitive)
 * example: myArray.sort( objectStringSorter('name') );
 *
 * @param  property     the object's property to use for compare
 * @return              sorting function
 */
function objectStringSorter(property) {
    return function (objA, objB) {
        var valueA = objA[property] ? objA[property].toString().toLowerCase() : '',
            valueB = objB[property] ? objB[property].toString().toLowerCase() : '';
        return valueA.localeCompare(valueB);
    };
}
