/**
 * Adds a stub that will call the given method instead of the original one.
 * @param {object} obj
 * @param {string} funcName
 * @param {function} replacementFunc
 * @returns {function}
 *
 * @example
 * // hijack BaseApi.bossApiGet, and wait for next call
 * hijack(BaseApi, 'bossApiGet', () => {
 *     // set reference back to the original function
 *     BaseApi.bossApiGet.reset();
 *     // make a copy
 *     const seasonData = deepClone(CurrentCompSeasonResponse);
 *     // resolve with the temp data as the response from the server
 *     return Promise.resolve(seasonData);
 * });
 */
export function hijack (obj, funcName, replacementFunc) {
	const hyjackedMethod = obj[funcName];
	let hijacker = function () {
		return replacementFunc.apply(obj, arguments);
	};
	hijacker.method = hyjackedMethod;
	hijacker.reset = function () {
		// return to original method
		obj[funcName] = hyjackedMethod;
	};
	// overwrite function
	obj[funcName] = hijacker;
}
