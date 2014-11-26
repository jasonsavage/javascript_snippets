/**
 * Filters objects from an array based on whether the object's property date exactly matches the filter date.
 * example: myArray.filter(dateFilter('birthday', '6/14/2007'));
 *
 * @param  property     object property to compare
 * @param  filterValue  the value to compare object's property value to
 * @return              boolean if object should stay in the array
 */
function dateFilter(property, filterDate) {
    return function (item) {
        var value = new Date(item[property]).toDateString(),
            filter = new Date(filterDate).toDateString();
        return (value === filter);
    }
}
