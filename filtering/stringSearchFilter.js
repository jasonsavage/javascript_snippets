/**
 * Filters objects from an array based on whether the object's property value contains the filter value.
 * example: myArray.filter(stringSearchFilter('name', 'Jo'));
 *
 * @param  property     object property to compare
 * @param  filterValue  the value to compare object's property value to
 * @return              boolean if object should stay in the array
 */
function stringSearchFilter (property, filterValue) {
  return function(item) {
    var value = item[property].toString().toLowerCase(),
        filter = filterValue.toString().trim().toLowerCase();
    return (value.indexOf(filter) !== -1);
  }
}
