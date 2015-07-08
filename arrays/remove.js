/**
 * Removes an item from an array if the item is in the array.
 * NOTE: compare based on reference to object in memory.
 * @param {Array} array
 * @param {Object} item
 * @returns {Object} A reference to the removed object or undefined
 */
function remove(item, array) {
    var index = array.indexOf(item);
    if(index !== -1) {
        return array.splice(index, 1);
    }
    return undefined;
}
