/**
 * Filters objects from an array based on whether the object's property value is less than the filter value.
 * example: myArray.filter(numberLessFilter('age', 6));
 *
 * @param  property     object property to compare
 * @param  filterValue  the value to compare object's property value to
 * @return              boolean if object should stay in the array
 */
function numberLessFilter(property, filterValue) {
    return function (item) {
        var value = parseFloat(item[property]),
            filter = parseFloat(filterValue);

        return (value < filter);
    }
}

/**
 * Filters objects from an array based on whether the object's property value is less than or equal to the filter value.
 * example: myArray.filter(numberLessOrEqualFilter('age', 6));
 *
 * @param  property     object property to compare
 * @param  filterValue  the value to compare object's property value to
 * @return              boolean if object should stay in the array
 */
function numberLessOrEqualFilter(property, filterValue) {
    return function (item) {
        var value = parseFloat(item[property]),
            filter = parseFloat(filterValue);

        return (value <= filter);
    }
}
