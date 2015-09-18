/**
 * Converts an array of objects to an array values based on key
 * @param {Array} array
 * @param {String} key
 * @returns {Array}
 */
function flattenObjectArray(array, key) {
    return array.map(function (item) {
        return item[key];
    });
}
