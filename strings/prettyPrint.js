/**
  * Fixes some formatting issue to make the supplied string more readable
  * @param {string} value
  * @returns {string}
  */
function prettyPrint (value) {
    if (value === '-' || value === '_') {
		return value;
	}

	return value
		.replace(/[-_]/g, ' ').trim()
		// match lowercase letter next to uppercase
		.replace(/([a-z])([A-Z])/g, '$1 $2')
		// match uppercase letter next to uppercase and then lowercase letter
		.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
		// match letter next to number
		.replace(/([a-zA-Z])(\d)/g, '$1 $2')
		// match number next to a letter
		.replace(/(\d)([a-zA-Z])/g, '$1 $2');
 }
