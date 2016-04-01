"use_strict";

/**
 * replaces {0}, {1}, {2}, etc with any arguments passed to the method in the same order 
 * @param {string} msg
 * @param {...} args
 */
function substitute(/*...args*/) {
	var args = Array.prototype.slice.call(arguments),
		msg = args.shift();

	return msg.replace(/{(\d+)}/g, function(match, number) {
		return typeof args[number] !== 'undefined'
			? args[number] : match;
	});
}
