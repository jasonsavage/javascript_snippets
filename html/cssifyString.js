/**
 * Converts a value to lowercase and replaces any whitespace with a '-' character.
 * 
 * @param {string} str
 * @return {string}
 */
function cssifyString(str) {
	return str.toLowerCase().replace(/\s+/, '-');
}
