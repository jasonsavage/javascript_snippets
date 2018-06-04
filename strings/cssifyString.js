/**
 * Converts the specified string into a valid css class
 * @param {string} value;
 * @returns {string}
 */
export function cssifyString (value) {
	if (!value || !value.length) {
		return '';
	}
	return value
        .toLowerCase()
        .replace(/\s+/, '-');
}
