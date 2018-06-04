/**
 * Checks equality of 2 arrays by comparing length and the each object at each index using the id property.
 * @param {Array} arrayA
 * @param {Array} arrayB
 * @returns {boolean}
 */
export function areArraysEqualByObjectId (arrayA, arrayB) {
	if (arrayA.length !== arrayB.length) {
		return false;
	}
	for (let i = 0, len = arrayA.length; i < len; i++) {
		if (!arrayB[i] || arrayA[i].id !== arrayB[i].id) {
			return false;
		}
	}
	return true;
}
