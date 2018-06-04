
/**
 * Calculates an average
 * @param {number} total
 * @param {number} quantity
 * @returns {number}
 */
export function average (total, quantity) {
	if (!quantity) {
		// prevent divide by 0 errors
		quantity = 1;
	}
	let avg = Math.ceil(total / quantity);
	return isNaN(avg) ? 0 : avg;
}
