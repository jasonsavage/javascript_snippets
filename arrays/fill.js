/**
 * Fills an array with objects until it reaches the specified size
 * @param {Array} array
 * @param {Number} length
 * @param {function} [createMethod=undefined]
 * @returns {Array}
 */
function fill(array, length, createMethod) {
    if(array.length < length) {
        createMethod = createMethod || function () { return {}; };
        for(var i = array.length; i < length; i++) {
			array.push(createMethod(i));
		}
    }
    return array;
}
