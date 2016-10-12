/**
 * Splits an array into array chunks based on size
 * @param {Array} array
 * @param {number} size
 * @returns {Array} - multi-dimensional array of chunks
 */
export function chunks (array, size) {
	var res = [];
	for (var i = 0; i < array.length; i += size) {
		res.push(array.slice(i, i+size));
	}
	return res;
}
