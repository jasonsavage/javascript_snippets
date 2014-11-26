/**
 * Sorts array values based on their numeric values
 * example: myArray.sort(numberSorter);
 *
 * @param  valueA   first value to compare
 * @param  valueB   second value to compare
 * @return          1, -1, 0
 */
function numberSorter(valueA, valueB) {
    return (valueA - valueB);
}

/**
 * Sorts array of objects based on numeric values
 * example: myArray.sort( objectNumberSorter('age') );
 *
 * @param  property     the object's property to use for compare
 * @return              sorting function
 */
function objectNumberSorter(property) {
    return function (objA, objB) {
        var valueA = objA[property],
            valueB = objB[property];
        return (valueA - valueB);
    };
}
