import _ from 'underscore';

/**
 * Adds all the values in an array together and returns the total
 * @param {Array} array
 * @returns {Number}
 */
function sum (array) {
    return array.reduce(function (a, b) { return a + b; });
}

/**
 * Add all the values in an array together using underscore
 * @param {Array} [array=undefined]
 * @returns {number}
 */
export function arraySum (array) {
	if (array && array.length) {
		return _.reduce(
			array,
			(memo, num) => {
				// verify that num is not undefined, NaN, etc... as that will return an invalid result
				return num ? memo + num : memo;
			},
			0
		);
	}

	return 0;
}
