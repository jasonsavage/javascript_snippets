/**
 * Sorts an array of objects based on their lookup table string values (mostly used for select dropdowns)
 * example:
 * var myArray = [
 *     {id:3, text : "cat"},
 *     {id:1, text : "rat"},
 *     {id:4, text : "snake"},
 *     {id:2, text : "dog"}
 * ];
 * var myLookup = {
 *     1 : {id:1, text : "rat"},
 *     2 : {id:2, text : "dog"},
 *     3 : {id:3, text : "cat"},
 *     4 : {id:4, text : "snake"}
 * };
 * myArray.sort( lookupTableSorter('id', 'text', myLookup) );
 * >> [{"id":3,"text":"cat"},{"id":2,"text":"dog"},{"id":1,"text":"rat"},{"id":4,"text":"snake"}]
 *
 * @param  property     the object's property to use for compare
 * @return              sorting function
 */
function lookupTableSorter(propertyA, propertyB, lookupTable) {
    return function (objA, objB) {
        var valueA = objA[propertyA],
            valueB = objB[propertyA],
            itemA = lookupTable[valueA.toString()],
            itemB = lookupTable[valueB.toString()];

        if (typeof itemA === 'undefined') {
            return (typeof itemB === 'undefined') ? 0 : -1;
        } else if (typeof itemB === 'undefined') {
            return (typeof itemA === 'undefined') ? 0 : 1;
        }

        valueA = itemA[propertyB],
        valueB = itemB[propertyB];
        return valueA.localeCompare(valueB);
    };
}
