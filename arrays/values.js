/**
 * Converts an array of objects into an array of values based on the specified property.
 * @param {Object[]} array
 * @param {String} prop
 * @returns {Array}
 */
function values (array, prop) {
	return array.map(function (item) {
		return item[prop];
	});
}
