import _ from 'underscore';

/**
 * Checks if a DOM node is a text input field
 * @param {HTMLElement} node
 * @returns {boolean}
 */
export function isEditableInput (node) {
	return (
		node.tagName.toUpperCase() === 'TEXTAREA' 
        || (node.tagName.toUpperCase() === 'INPUT' 
            && _.contains(['TEXT', 'PASSWORD', 'FILE', 'SEARCH', 'EMAIL', 'NUMBER', 'DATE'], node.type.toUpperCase()))
	);
}
