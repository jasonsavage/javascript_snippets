/**
 * Limit the delay between calls to the specified callback function
 * @param {function} callback
 * @param {number} limit
 * @returns {Function}
 */
function throttle (callback, limit) {
    var wait = false;
    return () => {
		if (!wait) {
			wait = true;
			callback.call();
			setTimeout(() => { 
                wait = false; 
            }, limit);
		}
	};
}
