/**
 * Moves an object from one array to another.
 * NOTE: compare based on reference to object in memory.
 * @param {Object} item
 * @param {Array} toArray
 * @param {Array} fromArray
 * @returns {Object} A reference to the item that was passed to the function
 */
function move(item, toArray, fromArray) {
    remove(item, fromArray);
    add(item, toArray);
    return item;
}
