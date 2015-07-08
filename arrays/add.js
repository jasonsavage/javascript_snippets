/**
 * Adds an item to an array if the item isn't already in the array.
 * NOTE: compare based on reference to object in memory.
 * @param {Array} array
 * @param {Object} item
 * @param {Boolean} [first=false] Add item to the front of the array or the end (default: end)
 * @returns {Number} The length of the array
 */
function add(item, array, first) {
    if(array.indexOf(item) === -1) {
        return (first) ? array.unshift(item) : array.push(item);
    }
    return array.length;
}
