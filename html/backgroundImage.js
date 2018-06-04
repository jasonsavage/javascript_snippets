/**
 * Convenience method for adding an inline style for a background image
 * @param {string} path
 * @param {object} [style={}]
 * @returns {object}
 */
export function backgroundImage (path = '', style = {}) {
	style.backgroundImage = `url('${path}')`;
	return style;
}
