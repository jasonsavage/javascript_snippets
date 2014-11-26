/**
 * Sorts array of dates
 * example: myArray.sort(dateSorter);
 *
 * @param  valueA   first value to compare
 * @param  valueB   second value to compare
 * @return          1, -1, 0
 */
function dateSorter(valueA, valueB) {
    var dateA = Date.parse(valueA),
        dateB = Date.parse(valueB);
    return (dateA - dateB);
}

/**
 * Sorts array of objects based on the properties date value
 * example: myArray.sort( objectDateSorter('startDate') );
 *
 * @param  property     the object's property to use for compare
 * @return              sorting function
 */
function objectDateSorter(property) {
    return function (objA, objB) {
        var dateA = Date.parse(objA[property]),
            dateB = Date.parse(objB[property]);
        return (dateA - dateB);
    };
}
