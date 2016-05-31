/**
 * Adds all the values in an array together and returns the total
 * @param {Array} array
 * @returns {Number}
 */
function sum (array) {
    return array.reduce(function (a, b) { return a + b; });
}

//fallback
function sum (array) {
    var sum = 0;
	array.forEach(function (value) {
		sum += (isNaN(value) ? 0 : value);
	});
	return sum;
}
