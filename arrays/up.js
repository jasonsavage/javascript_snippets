/**
 * Moves the item towards 0 by 1
 * NOTE: compare based on reference to object in memory.
 * @param item
 * @param array
 * @returns {Object} A reference to the item that was passed to the function
 */
function up(item, array) {
    var index = array.indexOf(item),
        toIndex = index - 1;

    if(index !== -1 && toIndex > -1) {
        array.splice(toIndex, 0, array.splice(index, 1)[0]);
    }
    return item;
}
