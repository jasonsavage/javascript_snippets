/**
 * Filters objects from an array based on whether the object's property date is less than the filter date.
 * example: myArray.filter(dateLessFilter('birthday', '6/14/2007'));
 *
 * @param  property     object property to compare
 * @param  filterValue  the value to compare object's property value to
 * @return              boolean if object should stay in the array
 */
function dateLessFilter(property, filterDate) {
    return function (item) {
        var value = new Date(item[property]).getTime(),
            filter = new Date(filterDate).getTime();
        return (value < filter);
    }
}

/**
 * Filters objects from an array based on whether the object's property date is less than or equal to the filter date.
 * example: myArray.filter(dateLessOrEqualFilter('birthday', '6/14/2007'));
 *
 * @param  property     object property to compare
 * @param  filterValue  the value to compare object's property value to
 * @return              boolean if object should stay in the array
 */
function dateLessOrEqualFilter(property, filterDate) {
    return function (item) {
        var value = new Date(item[property]).getTime(),
            filter = new Date(filterDate).getTime();
        return (value <= filter);
    }
}
