/**
 * Returns an onClick function that will only trigger {method} if {condition} is true
 * @param {boolean} condition
 * @param {function} method
 * @returns {function}
 */
export function clickIf (condition, method) {
	return () => { if(condition) { method(); } };
}
