import ReactDOM from 'react-dom';
import _ from 'underscore';
import $ from 'jquery';
import gridFill from '../array/gridFill';

/**
 * Tiny function that will add a jquery reference to an html element when it's rendered
 * @param {object} context
 * @param {string} name
 * @param {number} [row=-1]
 * @param {number} [col=-1]
 * @returns {function(*=): (jquery|HTMLElement)}
 */
export function r (context, name, row = -1, col = -1) {
	if (row !== -1) {
		//build array
		if (!_.isArray(context[name])) {
			context[name] = [];
		}

		if (col !== -1) {
			//build grid
			gridFill(context[name], row, col);
			return ele => (context[name][row][col] = $wrapElement(ele));
		}

		return ele => (context[name][row] = $wrapElement(ele));
	}

	return ele => (context[name] = $wrapElement(ele));
}

export function $wrapElement (ele) {
	return _.isObject(ele) && ele.context ? $(ReactDOM.findDOMNode(ele)) : $(ele);
}
